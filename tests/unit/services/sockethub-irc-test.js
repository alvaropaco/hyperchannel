import { moduleFor, test } from 'ember-qunit';
import Space from 'hyperchannel/models/space';
import Channel from 'hyperchannel/models/channel';

moduleFor('service:sockethub-irc', 'Unit | Service | sockethub irc', {
  needs: [
    'service:logger',
    'service:coms'
  ]
});

test('#join directly connects a person channel', function(assert) {
  const service = this.subject();
  const space = Space.create();
  const channel = Channel.create({ isUserChannel: true });

  service.join(space, channel, 'person');

  assert.ok(channel.get('connected'));
});

// FIXME this test randomly fails with error "Assertion occured after test had finished."
// test('#join sends the join activity to Sockethub for a room channel', function(assert) {
//   const done = assert.async();
//
//   const sockethubStub = {
//     ActivityStreams: {
//       Object: Object
//     },
//     socket: {
//       emit: function(type, event) {
//         assert.equal(type, 'message');
//         assert.equal(event['@type'], 'join');
//         assert.equal(event.target, 'testchannel');
//         done();
//       }
//     }
//   };
//
//   const service = this.subject({ sockethub: sockethubStub });
//   const space = Space.create();
//   const channel = Channel.create({ sockethubChannelId: 'testchannel' });
//
//   service.join(space, channel, 'room');
// });

test('#generateChannelId returns a Sockethub channel ID', function(assert) {
  const service = this.subject();
  const space = Space.create({
    server: {
      hostname: 'freenode.net'
    }
  });

  assert.equal(service.generateChannelId(space, '#random-channel'), 'irc://freenode.net/#random-channel');
});

