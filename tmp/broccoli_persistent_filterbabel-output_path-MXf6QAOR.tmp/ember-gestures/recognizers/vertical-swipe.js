define('ember-gestures/recognizers/vertical-swipe', ['exports'], function (exports) {
  'use strict';

  exports['default'] = {
    include: [],
    exclude: [],
    eventName: 'swipe',
    options: { threshold: 25, direction: Hammer.DIRECTION_VERTICAL },
    recognizer: 'swipe'
  };
});