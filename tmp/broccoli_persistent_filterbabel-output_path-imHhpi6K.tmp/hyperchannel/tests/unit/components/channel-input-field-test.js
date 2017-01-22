define('hyperchannel/tests/unit/components/channel-input-field-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('channel-input-field', {
    // Specify the other units that are required for this test
    // needs: ['component:foo', 'helper:bar']
    unit: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    assert.expect(2);

    // Creates the component instance
    var component = this.subject();
    assert.equal(component._state, 'preRender');

    // Renders the component to the page
    this.render();
    assert.equal(component._state, 'inDOM');
  });
});