define('hyperchannel/components/app-container/component', ['exports', 'ember', 'ember-gestures/mixins/recognizers'], function (exports, _ember, _emberGesturesMixinsRecognizers) {
  exports['default'] = _ember['default'].Component.extend(_emberGesturesMixinsRecognizers['default'], {

    tagName: 'div',
    classNames: ['app-container'],
    classNameBindings: ['showGlobalMenu:global-menu-open', 'showChannelMenu:channel-menu-open'],

    recognizers: 'swipeleft swiperight',

    swipeLeft: function swipeLeft() {
      this.set('showGlobalMenu', false);
    },

    swipeRight: function swipeRight() {
      this.set('showGlobalMenu', true);
    }

  });
});