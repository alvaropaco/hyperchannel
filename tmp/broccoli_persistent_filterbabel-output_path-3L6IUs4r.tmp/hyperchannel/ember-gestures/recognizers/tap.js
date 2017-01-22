define('hyperchannel/ember-gestures/recognizers/tap', ['exports', 'ember-gestures/recognizers/tap'], function (exports, _emberGesturesRecognizersTap) {
  // tap is not configured for double-tap, export single-tap
  //   if using double-tap
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberGesturesRecognizersTap['default'];
    }
  });
});