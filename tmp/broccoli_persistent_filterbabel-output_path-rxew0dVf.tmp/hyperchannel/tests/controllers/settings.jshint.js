define('hyperchannel/tests/controllers/settings.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | controllers/settings.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/settings.js should pass jshint.');
  });
});