define('hyperchannel/controllers/application', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller.extend({

    smt: _ember['default'].inject.service(),
    spaces: _ember['default'].computed.alias('smt.spaces'),

    showGlobalMenu: false,
    showChannelMenu: false

  });
});