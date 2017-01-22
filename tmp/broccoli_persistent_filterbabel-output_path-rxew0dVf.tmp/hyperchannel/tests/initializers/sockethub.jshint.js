define('hyperchannel/tests/initializers/sockethub.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | initializers/sockethub.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'initializers/sockethub.js should pass jshint.');
  });
});