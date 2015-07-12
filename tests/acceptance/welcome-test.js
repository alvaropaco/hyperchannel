/* global remoteStorage */
import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from 'hyperchannel/tests/helpers/start-app';

var application;

module('Acceptance | welcome', {
  beforeEach: function() {
    application = startApp();
  },

  afterEach: function() {
    Ember.run(application, 'destroy');
  }
});

test('visiting /welcome', function(assert) {
  visit('/welcome');

  andThen(function() {
    assert.equal(currentURL(), '/welcome');
    assert.equal(remoteStorage.connected, false);
  });
});
