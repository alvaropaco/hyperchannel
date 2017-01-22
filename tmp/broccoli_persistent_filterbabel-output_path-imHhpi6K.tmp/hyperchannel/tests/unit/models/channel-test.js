define('hyperchannel/tests/unit/models/channel-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('model:channel', 'Unit | Model | channel');

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    assert.ok(!!model);
  });

  (0, _emberQunit.test)('#slug', function (assert) {
    var model = this.subject();
    model.set('name', '#kosmos-dev');

    assert.ok(model.get('slug') === 'kosmos-dev');
  });

  //
  // formattedTopic
  //

  (0, _emberQunit.test)('#formattedTopic turns URLs into links', function (assert) {
    var channel = this.subject();
    channel.set('topic', 'visit kosmos.org for more info');

    assert.equal(channel.get('formattedTopic').toString(), 'visit <a href="https://kosmos.org" class="linkified" target="_blank" rel="nofollow">kosmos.org</a> for more info');
  });

  (0, _emberQunit.test)('#formattedTopic escapes HTML', function (assert) {
    var channel = this.subject();
    channel.set('topic', 'never gonna <marquee>give you up</marquee>');

    assert.equal(channel.get('formattedTopic').toString(), 'never gonna &lt;marquee&gt;give you up&lt;/marquee&gt;');
  });

  //
  // unreadMessagesClass
  //

  (0, _emberQunit.test)('#unreadMessagesClass is null when channel is visible', function (assert) {
    var channel = this.subject();
    channel.set('unreadMessages', true);
    channel.set('visible', true);

    assert.equal(channel.get('unreadMessagesClass'), null);
  });

  (0, _emberQunit.test)('#unreadMessagesClass is null when channel has no unread messages', function (assert) {
    var channel = this.subject();
    channel.set('unreadMessages', false);
    channel.set('visible', false);

    assert.equal(channel.get('unreadMessagesClass'), null);
  });

  (0, _emberQunit.test)('#unreadMessagesClass is correct for unread messages', function (assert) {
    var channel = this.subject();
    channel.set('unreadMessages', true);
    channel.set('unreadMentions', false);
    channel.set('visible', false);

    assert.equal(channel.get('unreadMessagesClass'), 'unread-messages');
  });

  (0, _emberQunit.test)('#unreadMessagesClass is correct for unread mentions', function (assert) {
    var channel = this.subject();
    channel.set('unreadMessages', true);
    channel.set('unreadMentions', true);
    channel.set('visible', false);

    assert.equal(channel.get('unreadMessagesClass'), 'unread-mentions');
  });
});