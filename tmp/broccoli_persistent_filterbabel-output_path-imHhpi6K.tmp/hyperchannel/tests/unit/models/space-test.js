define('hyperchannel/tests/unit/models/space-test', ['exports', 'ember-qunit', 'hyperchannel/models/channel'], function (exports, _emberQunit, _hyperchannelModelsChannel) {

  (0, _emberQunit.moduleFor)('model:space', 'Unit | Model | space');

  (0, _emberQunit.test)('#sortedChannels returns channels sorted by name', function (assert) {
    var space = this.subject();

    space.set('channels', [_hyperchannelModelsChannel['default'].create({ name: 'dominica' }), _hyperchannelModelsChannel['default'].create({ name: 'phu quoc' }), _hyperchannelModelsChannel['default'].create({ name: 'lamu' }), _hyperchannelModelsChannel['default'].create({ name: 'canoa' }), _hyperchannelModelsChannel['default'].create({ name: 'flores' })]);

    var sortedChannels = space.get('sortedChannels');
    assert.deepEqual(sortedChannels.mapBy('name'), ['canoa', 'dominica', 'flores', 'lamu', 'phu quoc']);
  });
});