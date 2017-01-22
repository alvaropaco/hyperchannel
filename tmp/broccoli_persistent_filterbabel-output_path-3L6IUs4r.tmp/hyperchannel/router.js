define('hyperchannel/router', ['exports', 'ember', 'hyperchannel/config/environment'], function (exports, _ember, _hyperchannelConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _hyperchannelConfigEnvironment['default'].locationType,
    rootURL: _hyperchannelConfigEnvironment['default'].rootURL
  });

  Router.map(function () {
    this.route('space', { path: '/:id' }, function () {
      this.route('channel', { path: '/channel/:slug' });
      this.route('userChannel', { path: '/user/:slug' });
    });

    this.route('settings');
  });

  exports['default'] = Router;
});