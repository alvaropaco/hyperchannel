define('hyperchannel/instance-initializers/ember-gestures', ['exports', 'ember-getowner-polyfill'], function (exports, _emberGetownerPolyfill) {
  exports['default'] = {
    name: 'ember-gestures',

    initialize: function initialize(instance) {
      if (typeof instance.lookup === "function") {
        instance.lookup('service:-gestures');
      } else {
        // This can be removed when we no-longer support ember 1.12 and 1.13
        (0, _emberGetownerPolyfill['default'])(instance).lookup('service:-gestures');
      }
    }

  };
});