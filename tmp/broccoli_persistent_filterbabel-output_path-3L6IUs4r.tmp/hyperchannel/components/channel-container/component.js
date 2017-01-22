define('hyperchannel/components/channel-container/component', ['exports', 'ember'], function (exports, _ember) {

  function scrollToBottom() {
    _ember['default'].$('#channel-content').animate({
      scrollTop: _ember['default'].$('#channel-content ul').height()
    }, '500');
  }

  exports['default'] = _ember['default'].Component.extend({

    elementId: 'channel',
    newMessage: '',
    channel: null,

    messagesUpdated: _ember['default'].observer('channel.messages.[]', function () {
      _ember['default'].run.scheduleOnce('afterRender', scrollToBottom);
    }),

    actions: {

      processMessageOrCommand: function processMessageOrCommand() {
        if (this.get('newMessage').substr(0, 1) === "/") {
          this.attrs.onCommand(this.get('newMessage'));
        } else {
          this.attrs.onMessage(this.get('newMessage'));
        }
      },

      menu: function menu(which, what) {
        this.sendAction("menu", which, what);
      }

    }
  });
});