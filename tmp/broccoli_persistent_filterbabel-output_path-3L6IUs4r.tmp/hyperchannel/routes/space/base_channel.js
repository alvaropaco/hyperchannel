define('hyperchannel/routes/space/base_channel', ['exports', 'ember'], function (exports, _ember) {

  function scrollToBottom() {
    _ember['default'].$('#channel-content').animate({
      scrollTop: _ember['default'].$('#channel-content ul').height()
    }, '500');
  }

  function focusMessageInput() {
    if (window.innerWidth > 900) {
      console.debug('innerWidth', window.innerWidth);
      _ember['default'].$('input#message-field').focus();
    } else {
      // Don't auto-focus on small screens
    }
  }

  exports['default'] = _ember['default'].Route.extend({

    smt: _ember['default'].inject.service(),

    model: function model(params) {
      var space = this.modelFor('space');
      var channel = space.get('channels').findBy('slug', params.slug);

      if (!channel) {
        channel = this.createChannelOrUserChannel(space, params.slug);
      }

      return channel;
    },

    setupController: function setupController(controller, model) {
      this._super(controller, model);

      _ember['default'].run.scheduleOnce('afterRender', function () {
        focusMessageInput();
        scrollToBottom();
      });
    },

    actions: {

      didTransition: function didTransition() {
        var _this = this;

        var space = this.modelFor('space');
        var channel = this.controller.get('model');

        // Mark channel as active/visible
        space.get('channels').setEach('visible', false);
        channel.set('visible', true);

        // Mark unread messages as read
        channel.set('unreadMessages', false);
        channel.set('unreadMentions', false);

        setTimeout(function () {
          return _this.send('menu', 'global', 'hide');
        }, 500);
      }

    }

  });
});