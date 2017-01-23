define('hyperchannel/models/channel', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Object.extend({

    name: '',
    userList: null,
    messages: null,
    connected: false,
    sockethubChannelId: null,
    topic: null,
    unreadMessages: false,
    unreadMentions: false,
    visible: false, // Current/active channel

    slug: (function () {
      // This could be based on server type in the future. E.g. IRC would be
      // server URL, while Campfire would be another id.
      return this.get('name').replace(/#/g, '');
    }).property('name'),

    formattedTopic: (function () {
      if (this.get('topic') !== null) {
        var topic = linkifyStr(this.get('topic'), {
          defaultProtocol: 'https',
          linkAttributes: { rel: 'nofollow' }
        });
        return new _ember['default'].String.htmlSafe(topic);
      } else {
        return '';
      }
    }).property('topic'),

    unreadMessagesClass: (function () {
      if (this.get('visible') || !this.get('unreadMessages')) {
        return null;
      }
      return this.get('unreadMentions') ? 'unread-mentions' : 'unread-messages';
    }).property('visible', 'unreadMessages', 'unreadMentions')

  });
});