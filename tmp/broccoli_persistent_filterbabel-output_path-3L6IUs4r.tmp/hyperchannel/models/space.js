define('hyperchannel/models/space', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Object.extend({

    name: '',
    ircServer: {
      hostname: 'irc.freenode.net',
      port: 6667,
      secure: false,
      username: null,
      password: null,
      nickname: null,
      nickServ: {
        password: null
      }
    },
    channels: null,
    users: null,

    id: (function () {
      // This could be based on server type in the future. E.g. IRC would be
      // server URL, while Campfire would be another id.
      return this.get('name').toLowerCase();
    }).property('name'),

    sockethubPersonId: (function () {
      return 'irc://' + this.get('ircServer.nickname') + '@' + this.get('ircServer.hostname');
    }).property('ircServer.hostname', 'ircServer.nickname'),

    channelSorting: ['name'],
    sortedChannels: _ember['default'].computed.sort('channels', 'channelSorting')

  });
});