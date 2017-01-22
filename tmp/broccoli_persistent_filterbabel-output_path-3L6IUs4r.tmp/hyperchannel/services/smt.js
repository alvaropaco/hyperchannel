define('hyperchannel/services/smt', ['exports', 'ember', 'hyperchannel/models/space', 'hyperchannel/models/channel', 'hyperchannel/models/user_channel', 'hyperchannel/models/message'], function (exports, _ember, _hyperchannelModelsSpace, _hyperchannelModelsChannel, _hyperchannelModelsUser_channel, _hyperchannelModelsMessage) {
  // import User from 'hyperchannel/models/channel';

  exports['default'] = _ember['default'].Service.extend({

    spaces: null,
    // users:  null,

    loadFixtures: function loadFixtures() {
      this.setupListeners();
      this.instantiateSpaces();
      this.instantiateChannels();
    },

    instantiateSpaces: function instantiateSpaces() {
      var _this = this;

      this.set('spaces', []);

      var spaceFixtures = this.get('spaceFixtures');
      Object.keys(spaceFixtures).forEach(function (spaceName) {
        var space = _hyperchannelModelsSpace['default'].create({ name: spaceName, ircServer: spaceFixtures[spaceName].ircServer });
        _this.connectToIRCServer(space);
        _this.get('spaces').pushObject(space);
      });
    },

    connectToIRCServer: function connectToIRCServer(space) {
      this.sockethub.ActivityStreams.Object.create({
        '@id': space.get('sockethubPersonId'),
        '@type': "person",
        displayName: space.get('ircServer.nickname')
      });

      var credentials = {
        actor: space.get('sockethubPersonId'),
        context: 'irc',
        object: {
          '@type': 'credentials',
          nick: space.get('ircServer.nickname'),
          server: space.get('ircServer.hostname'),
          port: space.get('ircServer.port'),
          secure: space.get('ircServer.secure')
        }
      };

      _ember['default'].Logger.debug('connecting to irc', credentials);
      this.sockethub.socket.emit('credentials', credentials);
    },

    transferMessage: function transferMessage(space, target, content) {
      var job = {
        context: 'irc',
        '@type': 'send',
        actor: space.get('sockethubPersonId'),
        target: target,
        object: {
          '@type': 'message',
          content: content
        }
      };

      console.log('sending message job', job);
      this.sockethub.socket.emit('message', job);
    },

    transferMeMessage: function transferMeMessage(space, target, content) {
      var job = {
        context: 'irc',
        '@type': 'send',
        actor: space.get('sockethubPersonId'),
        target: target,
        object: {
          '@type': 'me',
          content: content
        }
      };

      console.log('sending message job', job);
      this.sockethub.socket.emit('message', job);
    },

    setupListeners: function setupListeners() {
      var _this2 = this;

      this.sockethub.socket.on('completed', function (message) {
        _ember['default'].Logger.debug('SH completed', message);

        switch (message['@type']) {
          case 'join':
            if (message['@type'] === 'join') {
              var space = _this2.get('spaces').findBy('sockethubPersonId', message.actor);
              if (!_ember['default'].isEmpty(space)) {
                var channel = space.get('channels').findBy('sockethubChannelId', message.target);
                if (!_ember['default'].isEmpty(channel)) {
                  channel.set('connected', true);
                  _this2.observeChannel(space.get('sockethubPersonId'), channel.get('sockethubChannelId'));
                }
              }
            }
            break;
          case 'observe':
            if (message.object['@type'] === 'attendance') {
              _this2.updateChannelUserList(message);
            }
            break;
        }
      });

      this.sockethub.socket.on('message', function (message) {
        _ember['default'].Logger.debug('SH message', message);

        switch (message['@type']) {
          case 'observe':
            if (message.object['@type'] === 'attendance') {
              _this2.updateChannelUserList(message);
            }
            break;
          case 'join':
            _this2.addUserToChannelUserList(message);
            break;
          case 'leave':
            _this2.removeUserFromChannelUserList(message);
            break;
          case 'send':
            switch (message.object['@type']) {
              case 'message':
              case 'me':
                _this2.addMessageToChannel(message);
                break;
            }
            break;
          case 'update':
            if (message.object['@type'] === 'topic') {
              _this2.updateChannelTopic(message);
            }
            break;
        }

        // user list for a channel
      });

      this.sockethub.socket.on('failure', function (message) {
        _ember['default'].Logger.error('SH failure', message);
      });
    },

    updateChannelUserList: function updateChannelUserList(message) {
      var channel = this.getChannelByMessage(message);
      if (channel) {
        channel.set('userList', message.object.members.sort());
      }
    },

    addUserToChannelUserList: function addUserToChannelUserList(message) {
      var channel = this.getChannelByMessage(message);
      if (channel) {
        var userList = channel.get('userList');
        userList.pushObject(message.actor.displayName);
      }
    },

    removeUserFromChannelUserList: function removeUserFromChannelUserList(message) {
      var channel = this.getChannelByMessage(message);
      if (channel) {
        var userList = channel.get('userList');
        userList.removeObject(message.actor.displayName);
      }
    },

    getChannelByMessage: function getChannelByMessage(message) {
      var addressWithHostname, hostname;
      if (typeof message.actor === 'object') {
        addressWithHostname = message.actor['@id'];
      } else if (typeof message.actor === 'string') {
        addressWithHostname = message.actor;
      }

      hostname = addressWithHostname.match(/irc:\/\/(?:.+@)?(.+?)(?:\/|$)/)[1];

      var space = this.get('spaces').findBy('ircServer.hostname', hostname);

      if (!_ember['default'].isEmpty(space)) {
        var channel = space.get('channels').findBy('sockethubChannelId', message.target['@id']);
        if (!_ember['default'].isEmpty(channel)) {
          return channel;
        }
      }
    },

    updateChannelTopic: function updateChannelTopic(message) {
      var hostname;
      if (typeof message.target === 'object') {
        hostname = message.target['@id'].match(/irc:\/\/(.+)\//)[1];
      } else if (typeof message.actor === 'string') {
        hostname = message.actor.match(/irc:\/\/.+\@(.+)/)[1];
      }

      var space = this.get('spaces').findBy('ircServer.hostname', hostname);

      if (!_ember['default'].isEmpty(space)) {
        var channel = space.get('channels').findBy('sockethubChannelId', message.target['@id']);

        if (_ember['default'].isEmpty(channel)) {
          channel = this.createChannel(space, message.target['@id']);
        }

        channel.set('topic', message.object.topic);

        // let notification = Message.create({
        //   type: 'notification-topic-change',
        //   date: new Date(message.published),
        //   nickname: message.actor.displayName,
        //   content: message.object.topic
        // });

        // channel.get('messages').pushObject(notification);

        // TODO only send when topic actually changed (and not after joining
        // channels)
        Notification.requestPermission(function () {
          new Notification(channel.name, {
            body: "New Topic: " + message.object.topic
          });
        });
      }
    },

    addMessageToChannel: function addMessageToChannel(message) {
      var space = this.get('spaces').findBy('ircServer.hostname', message.actor['@id'].match(/irc:\/\/.+\@(.+)/)[1]);
      var nickname = space.get('ircServer.nickname');

      var targetChannelName;
      if (nickname === message.target.displayName) {
        targetChannelName = message.actor.displayName;
      } else {
        targetChannelName = message.target.displayName;
      }

      var channel = space.get('channels').findBy('name', targetChannelName);
      if (!channel) {
        channel = this.createChannel(space, targetChannelName);
      }

      var messageType = undefined;
      if (message.object['@type'] === 'me') {
        messageType = 'message-chat-me';
      } else {
        messageType = 'message-chat';
      }

      var channelMessage = _hyperchannelModelsMessage['default'].create({
        type: messageType,
        date: new Date(message.published),
        nickname: message.actor.displayName,
        content: message.object.content
      });

      // TODO should check for message and update sent status if exists
      if (message.actor.displayName !== nickname) {
        channel.get('messages').pushObject(channelMessage);

        if (!channel.get('visible')) {
          channel.set('unreadMessages', true);
          if (message.object.content.match(nickname)) {
            channel.set('unreadMentions', true);
          }
        }
      }
    },

    observeChannel: function observeChannel(person, channelId) {
      var observeMsg = {
        context: 'irc',
        '@type': 'observe',
        actor: person,
        target: channelId,
        object: {
          '@type': 'attendance'
        }
      };

      _ember['default'].Logger.debug('asking for attendance list', observeMsg);
      this.sockethub.socket.emit('message', observeMsg);
    },

    instantiateChannels: function instantiateChannels() {
      var _this3 = this;

      this.get('spaces').forEach(function (space) {
        space.set('channels', []);

        _this3.get('spaceFixtures')[space.get('name')].channels.forEach(function (channelName) {
          _this3.createChannel(space, channelName);
        });
      });
    },

    createChannel: function createChannel(space, channelName) {
      var channel = _hyperchannelModelsChannel['default'].create({
        name: channelName,
        sockethubChannelId: 'irc://' + space.get('ircServer.hostname') + '/' + channelName,
        messages: []
      });
      this.joinChannel(space, channel, "room");
      channel.set('userList', []);
      space.get('channels').pushObject(channel);
      return channel;
    },

    createUserChannel: function createUserChannel(space, userName) {
      var channel = _hyperchannelModelsUser_channel['default'].create({
        name: userName,
        sockethubChannelId: 'irc://' + space.get('ircServer.hostname') + '/' + userName,
        messages: []
      });
      this.joinChannel(space, channel, "person");
      channel.set('userList', []);
      space.get('channels').pushObject(channel);
      return channel;
    },

    removeChannel: function removeChannel(space, channelName) {
      var channel = space.get('channels').findBy('name', channelName);
      this.leaveChannel(space, channel);
      space.get('channels').removeObject(channel);
      return channel;
    },

    joinChannel: function joinChannel(space, channel, type) {
      this.sockethub.ActivityStreams.Object.create({
        '@type': type,
        '@id': channel.get('sockethubChannelId'),
        displayName: channel.get('name')
      });

      var joinMsg = {
        context: 'irc',
        '@type': 'join',
        actor: space.get('sockethubPersonId'),
        target: channel.get('sockethubChannelId'),
        object: {}
      };

      _ember['default'].Logger.debug('joining channel', joinMsg);
      this.sockethub.socket.emit('message', joinMsg);
    },

    leaveChannel: function leaveChannel(space, channel) {
      this.sockethub.ActivityStreams.Object.create({
        '@type': "room",
        '@id': channel.get('sockethubChannelId'),
        displayName: channel.get('name')
      });

      var joinMsg = {
        context: 'irc',
        '@type': 'leave',
        actor: space.get('sockethubPersonId'),
        target: channel.get('sockethubChannelId'),
        object: {}
      };

      _ember['default'].Logger.debug('leaving channel', joinMsg);
      this.sockethub.socket.emit('message', joinMsg);
    },

    changeTopic: function changeTopic(space, channel, topic) {
      var topicMsg = {
        context: 'irc',
        '@type': 'update',
        actor: space.get('sockethubPersonId'),
        target: channel.get('sockethubChannelId'),
        object: {
          '@type': 'topic',
          topic: topic
        }
      };

      this.sockethub.socket.emit('message', topicMsg);
    },

    spaceFixtures: (function () {
      var nickname = localStorage.getItem('hyperchannel-nickname');
      if (!nickname) {
        nickname = prompt("Choose a Nickname");
        localStorage.setItem('hyperchannel-nickname', nickname);
      }

      return {
        'Freenode': {
          ircServer: {
            hostname: 'irc.freenode.net',
            port: 6667,
            secure: false,
            username: null,
            password: null,
            nickname: nickname,
            nickServ: {
              password: null
            }
          },
          channels: ['#67p', '#hackerbeach', '#kosmos', '#kosmos-dev', '#kosmos-random', '#sockethub']
        }
      };
    }). // 'Enterprise': {
    //   ircServer : {
    //     hostname: 'irc.kosmos.net',
    //     port: 6667,
    //     secure: false,
    //     username: null,
    //     password: null,
    //     nickname: 'kosmos-enterprise-dev',
    //     nickServ: {
    //       password: null
    //     }
    //   }
    // },
    property(),

    userFixtures: (function () {
      return [{ username: 'bkero' }, { username: 'derbumi' }, { username: 'galfert' }, { username: 'gregkare' }, { username: 'jaaan' }, { username: 'LSA232' }, { username: 'raucao' }, { username: 'slvrbckt' }];
    }).property()

  });
});