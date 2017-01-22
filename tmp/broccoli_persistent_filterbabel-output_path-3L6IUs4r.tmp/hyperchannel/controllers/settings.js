define('hyperchannel/controllers/settings', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller.extend({

    application: _ember['default'].inject.controller(),
    ircSettings: _ember['default'].computed.alias('application.ircSettings')

  });
});