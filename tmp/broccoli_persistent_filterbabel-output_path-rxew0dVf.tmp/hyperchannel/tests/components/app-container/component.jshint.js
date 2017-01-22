define('hyperchannel/tests/components/app-container/component.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | components/app-container/component.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/app-container/component.js should pass jshint.');
  });
});