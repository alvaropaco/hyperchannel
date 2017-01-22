define('hyperchannel/models/message', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Object.extend({

    type: null,
    date: null,
    nickname: null,
    content: null

  });
});