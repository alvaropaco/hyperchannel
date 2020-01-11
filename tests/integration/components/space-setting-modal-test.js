import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import Space from 'hyperchannel/models/space';

module('Integration | Component | space setting modal', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders the form with preset values', async function(assert) {
    const space = Space.create();
    space.setProperties({
      "id": "moznet",
      "name": "Mozilla",
      "description": "Mozilla's public IRC network",
      "website": "https://wiki.mozilla.org/IRC",
      "protocol": "IRC",
      "server": {
        "hostname": "irc.mozilla.org",
        "secure": true,
        "port": 6697
      }
    });

    this.set('preset', space);

    await render(hbs`{{space-setting-modal settings=preset}}`);

    assert.equal(this.$().find('h1').text().trim(), 'Space Setting');
    assert.equal(this.$().find('input').first().val().trim(), 'IRC');
  });
});