define('hyperchannel/tests/helpers/resolver', ['exports', 'hyperchannel/resolver', 'hyperchannel/config/environment'], function (exports, _hyperchannelResolver, _hyperchannelConfigEnvironment) {

  var resolver = _hyperchannelResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _hyperchannelConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _hyperchannelConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});