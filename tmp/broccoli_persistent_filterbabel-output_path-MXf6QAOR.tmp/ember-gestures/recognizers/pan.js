define('ember-gestures/recognizers/pan', ['exports'], function (exports) {
  'use strict';

  exports['default'] = {
    include: [],
    exclude: [],
    options: { direction: Hammer.DIRECTION_HORIZONTAL },
    recognizer: 'pan'
  };
});