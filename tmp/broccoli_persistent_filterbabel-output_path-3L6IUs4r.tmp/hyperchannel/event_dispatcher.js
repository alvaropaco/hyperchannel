define('hyperchannel/event_dispatcher', ['exports', 'ember', 'ember-gestures/event_dispatcher', 'hyperchannel/config/environment'], function (exports, _ember, _emberGesturesEvent_dispatcher, _hyperchannelConfigEnvironment) {

  var gestures = _ember['default'].merge({}, {
    emberUseCapture: false,
    removeTracking: false,
    useFastPaths: false
  });
  gestures = _ember['default'].merge(gestures, _hyperchannelConfigEnvironment['default'].gestures);

  exports['default'] = _emberGesturesEvent_dispatcher['default'].extend({
    useCapture: gestures.emberUseCapture,
    removeTracking: gestures.removeTracking,
    useFastPaths: gestures.useFastPaths
  });
});