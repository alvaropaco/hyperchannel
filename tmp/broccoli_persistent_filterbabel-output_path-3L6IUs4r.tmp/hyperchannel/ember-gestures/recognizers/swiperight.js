define('hyperchannel/ember-gestures/recognizers/swiperight', ['exports'], function (exports) {
  /* global Hammer */
  exports['default'] = {
    include: [],
    exclude: [],
    options: { threshold: 25, direction: Hammer.DIRECTION_RIGHT },
    eventName: 'swiperight',
    recognizer: 'swipe'
  };
});