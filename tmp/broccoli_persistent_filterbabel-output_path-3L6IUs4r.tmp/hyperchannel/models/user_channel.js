define('hyperchannel/models/user_channel', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Object.extend({

    name: '',
    userList: null,
    messages: null,
    connected: false,
    sockethubChannelId: null,
    topic: null,
    isUserChannel: true,

    slug: (function () {
      // This could be based on server type in the future. E.g. IRC would be
      // server URL, while Campfire would be another id.
      return this.get('name').replace(/#/g, '');
    }).property('name')

  });
});