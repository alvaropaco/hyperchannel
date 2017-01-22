define('ember-gestures/recognizers/vertical-pan', ['exports'], function (exports) {
  'use strict';

  exports['default'] = {
    include: [],
    exclude: [],
    eventName: 'pan',
    options: { direction: Hammer.DIRECTION_VERTICAL },
    recognizer: 'pan'
  };
});