define('hyperchannel/controllers/index', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller.extend({

    application: _ember['default'].inject.controller()

  });
});