define('hyperchannel/tests/services/smt.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | services/smt.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'services/smt.js should pass jshint.');
  });
});