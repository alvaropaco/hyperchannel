define('hyperchannel/controllers/space/base_channel', ['exports', 'ember', 'hyperchannel/models/message'], function (exports, _ember, _hyperchannelModelsMessage) {
  exports['default'] = _ember['default'].Controller.extend({

    newMessage: null,
    space: _ember['default'].inject.controller(),
    smt: _ember['default'].inject.service(),

    actions: {
      sendMessage: function sendMessage(newMessage) {
        var message = _hyperchannelModelsMessage['default'].create({
          type: 'message-chat',
          date: new Date(),
          nickname: this.get('space.model.ircServer.nickname'),
          content: newMessage
        });

        this.get('smt').transferMessage(this.get('space.model'), this.get('model.sockethubChannelId'), message.get('content'));

        this.get('model.messages').pushObject(message);
        this.set('newMessage', null);
      },

      executeCommand: function executeCommand(newMessage) {
        var availableCommands = ["help", "join", "leave", "me", "msg", "part", "topic"];
        var commandText = newMessage.substr(1);
        var commandSplitted = commandText.split(" ");
        var command = commandSplitted[0];

        if (availableCommands.includes(command.toLowerCase())) {
          this.send(command + 'Command', commandSplitted.slice(1));
        } else {
          console.log('Unknown command', commandText);
        }

        this.set('newMessage', null);
      },

      joinCommand: function joinCommand(args) {
        var channel = this.get('smt').createChannel(this.get('space.model'), args[0]);
        this.transitionToRoute('space.channel', this.get('space.model'), channel);
      },

      partCommand: function partCommand() {
        var space = this.get('space.model');
        var channelName = this.get('model.name');
        this.get('smt').removeChannel(space, channelName);
        var lastChannel = space.get('channels.lastObject');
        this.transitionToRoute('space.channel', space, lastChannel);
      },

      leaveCommand: function leaveCommand() {
        this.send('partCommand');
      },

      helpCommand: function helpCommand() {},

      meCommand: function meCommand(args) {
        var newMessage = args.join(' ');

        var message = _hyperchannelModelsMessage['default'].create({
          type: 'message-chat-me',
          date: new Date(),
          nickname: this.get('space.model.ircServer.nickname'),
          content: newMessage
        });

        this.get('smt').transferMeMessage(this.get('space.model'), this.get('model.sockethubChannelId'), message.get('content'));

        this.get('model.messages').pushObject(message);
      },

      msgCommand: function msgCommand(args) {
        var username = args.shift();
        this.get('smt').createUserChannel(this.get('space.model'), username);
        // TODO fix this, sockethub sends a failure event with error
        // "TypeError: Cannot read property 'indexOf' of undefined"
        // this.get('smt').transferMessage(this.get('space.model'), username, args.join(' '));
      },

      topicCommand: function topicCommand(args) {
        var channel = this.get('model');
        var topic = args.join(' ');

        this.get('smt').changeTopic(this.get('space.model'), channel, topic);
      }
    }

  });
});