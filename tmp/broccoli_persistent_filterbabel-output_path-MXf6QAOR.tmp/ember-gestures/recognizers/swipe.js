define('ember-gestures/recognizers/swipe', ['exports'], function (exports) {
  'use strict';

  exports['default'] = {
    include: [],
    exclude: [],
    options: { threshold: 25, direction: Hammer.DIRECTION_HORIZONTAL },
    recognizer: 'swipe'
  };
});