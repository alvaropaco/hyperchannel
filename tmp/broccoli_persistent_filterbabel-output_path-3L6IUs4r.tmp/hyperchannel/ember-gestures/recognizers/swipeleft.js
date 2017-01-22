define('hyperchannel/ember-gestures/recognizers/swipeleft', ['exports'], function (exports) {
  /* global Hammer */
  exports['default'] = {
    include: [],
    exclude: [],
    options: { threshold: 25, direction: Hammer.DIRECTION_LEFT },
    eventName: 'swipeleft',
    recognizer: 'swipe'
  };
});