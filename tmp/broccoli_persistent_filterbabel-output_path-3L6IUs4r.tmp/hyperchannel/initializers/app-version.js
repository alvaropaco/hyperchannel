define('hyperchannel/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'hyperchannel/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _hyperchannelConfigEnvironment) {
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(_hyperchannelConfigEnvironment['default'].APP.name, _hyperchannelConfigEnvironment['default'].APP.version)
  };
});