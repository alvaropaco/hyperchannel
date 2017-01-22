define('ember-gestures/recognizers/single-tap', ['exports'], function (exports) {
  'use strict';

  exports['default'] = {
    include: [],
    exclude: ['double-tap'],
    eventName: 'tap',
    options: {
      taps: 1
    },
    recognizer: 'tap'
  };
});