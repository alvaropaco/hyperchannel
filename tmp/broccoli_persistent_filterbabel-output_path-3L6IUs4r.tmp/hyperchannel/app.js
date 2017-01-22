define('hyperchannel/app', ['exports', 'ember', 'hyperchannel/resolver', 'ember-load-initializers', 'hyperchannel/config/environment'], function (exports, _ember, _hyperchannelResolver, _emberLoadInitializers, _hyperchannelConfigEnvironment) {

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _hyperchannelConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _hyperchannelConfigEnvironment['default'].podModulePrefix,
    Resolver: _hyperchannelResolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _hyperchannelConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});