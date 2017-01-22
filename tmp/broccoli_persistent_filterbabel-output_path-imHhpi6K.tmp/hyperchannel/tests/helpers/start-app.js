define('hyperchannel/tests/helpers/start-app', ['exports', 'ember', 'hyperchannel/app', 'hyperchannel/config/environment'], function (exports, _ember, _hyperchannelApp, _hyperchannelConfigEnvironment) {
  exports['default'] = startApp;

  function startApp(attrs) {
    var application = undefined;

    var attributes = _ember['default'].merge({}, _hyperchannelConfigEnvironment['default'].APP);
    attributes = _ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    _ember['default'].run(function () {
      application = _hyperchannelApp['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }
});