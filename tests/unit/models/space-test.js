import { moduleFor, test } from 'ember-qunit';
import Channel from 'hyperchannel/models/channel';

moduleFor('model:space', 'Unit | Model | space');

test('#sortedChannels returns channels sorted by name', function(assert) {
  let space = this.subject();

  space.set('channels', [
    Channel.create({name: 'dominica'}),
    Channel.create({name: 'phu quoc'}),
    Channel.create({name: 'lamu'}),
    Channel.create({name: 'canoa'}),
    Channel.create({name: 'flores'})
  ]);

  let sortedChannels = space.get('sortedChannels');
  assert.deepEqual(sortedChannels.mapBy('name'), ['canoa', 'dominica', 'flores', 'lamu', 'phu quoc']);
});

test('#loggedChannels returns list of channels when space is Freenode', function(assert) {
  let space = this.subject({ name: 'Freenode' });

  let loggedChannels = space.get('loggedChannels');

  assert.ok(loggedChannels.length > 0);
  assert.ok(loggedChannels.find(function(name) { return name === '#kosmos'; }));
});

test('#loggedChannels returns empty list when space is not Freenode', function(assert) {
  let space = this.subject({ name: 'Quakenet' });

  assert.equal(space.get('loggedChannels').length, 0);
});
