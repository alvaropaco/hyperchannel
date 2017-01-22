define('hyperchannel/routes/space', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({

    smt: _ember['default'].inject.service(),

    model: function model(params) {
      return this.get('smt').get('spaces').findBy('id', params.id);
    }

  });
});