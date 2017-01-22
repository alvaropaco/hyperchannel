define('hyperchannel/initializers/sockethub', ['exports', 'hyperchannel/config/environment'], function (exports, _hyperchannelConfigEnvironment) {

  // TODO move settings into config file
  var sockethub = new SockethubClient(io(_hyperchannelConfigEnvironment['default'].sockethubURL, { path: '/sockethub' }));

  exports['default'] = {
    name: 'sockethub',

    initialize: function initialize(app) {
      app.register('sockethub:client', sockethub, { instantiate: false, singleton: true });

      app.inject('controller', 'sockethub', 'sockethub:client');
      app.inject('route', 'sockethub', 'sockethub:client');
      app.inject('component', 'sockethub', 'sockethub:client');
      app.inject('service', 'sockethub', 'sockethub:client');
    }
  };
});
/* global SockethubClient */
/* global io */