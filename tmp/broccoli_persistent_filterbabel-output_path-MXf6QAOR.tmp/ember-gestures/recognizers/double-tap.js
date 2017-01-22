define('ember-gestures/recognizers/double-tap', ['exports'], function (exports) {
  'use strict';

  exports['default'] = {
    include: ['tap'],
    exclude: [],
    options: {
      taps: 2
    },
    recognizer: 'tap'
  };
});