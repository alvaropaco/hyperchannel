import channelMessageFromSockethubObject from 'hyperchannel/utils/channel-message-from-sockethub-object';
import Message from 'hyperchannel/models/message';
import { module, test } from 'qunit';

module('Unit | Utility | channel message from sockethub object', function() {
  let sockethubMessageObject = {
    actor: {
      '@id': 'raucao@irc.freenode.net',
      '@type': 'person',
      displayName: 'raucao'
    },
    object: {
      '@type': 'message',
      content: 'airberlin flight AB 1234 is ready for boarding'
    },
    published: '2017-06-14T06:32:42.025Z'
  };

  test('it creates a message instance from a Sockethub message object', function(assert) {
    let result = channelMessageFromSockethubObject(sockethubMessageObject);

    assert.ok(result instanceof Message);
    let { type, nickname, content } = result;
    assert.deepEqual({ type, nickname, content }, {
      type: 'message-chat',
      nickname: 'raucao',
      content: 'airberlin flight AB 1234 is ready for boarding'
    });
    assert.equal(new Date(result.date).toISOString(),
                 new Date('2017-06-14T06:32:42.025Z').toISOString());
  });

  test('it creates an action message instance from a Sockethub message object', function(assert) {
    sockethubMessageObject.object['@type'] = 'me';
    sockethubMessageObject.object.content = 'boards the plane';
    let result = channelMessageFromSockethubObject(sockethubMessageObject);

    assert.ok(result instanceof Message);
    let { type, nickname, content } = result;
    assert.deepEqual({ type, nickname, content }, {
      type: 'message-chat-me',
      nickname: 'raucao',
      content: 'boards the plane'
    });
    assert.equal(new Date(result.date).toISOString(),
                 new Date('2017-06-14T06:32:42.025Z').toISOString());
  });

  test('it works with the published field being a unix timestamp', function(assert) {
    sockethubMessageObject.published = '1497421962025';

    let result = channelMessageFromSockethubObject(sockethubMessageObject);

    assert.ok(result instanceof Message);
    assert.equal(new Date(result.date).toISOString(),
                 new Date('2017-06-14T06:32:42.025Z').toISOString());
  });
});
