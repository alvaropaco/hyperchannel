define('hyperchannel/components/app-version', ['exports', 'ember-cli-app-version/components/app-version', 'hyperchannel/config/environment'], function (exports, _emberCliAppVersionComponentsAppVersion, _hyperchannelConfigEnvironment) {

  var name = _hyperchannelConfigEnvironment['default'].APP.name;
  var version = _hyperchannelConfigEnvironment['default'].APP.version;

  exports['default'] = _emberCliAppVersionComponentsAppVersion['default'].extend({
    version: version,
    name: name
  });
});