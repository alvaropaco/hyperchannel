define('hyperchannel/services/-gestures', ['exports', 'ember', 'hyperchannel/config/environment', 'ember-gestures/services/-gestures'], function (exports, _ember, _hyperchannelConfigEnvironment, _emberGesturesServicesGestures) {

  var gestures = _ember['default'].merge({}, {
    useCapture: false
  });
  gestures = _ember['default'].merge(gestures, _hyperchannelConfigEnvironment['default'].gestures);

  exports['default'] = _emberGesturesServicesGestures['default'].extend({
    useCapture: gestures.useCapture
  });
});