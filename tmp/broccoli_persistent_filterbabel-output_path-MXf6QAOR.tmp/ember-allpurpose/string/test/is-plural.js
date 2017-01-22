define('ember-allpurpose/string/test/is-plural', ['exports', 'ember-allpurpose/string/char-at'], function (exports, _emberAllpurposeStringCharAt) {
  'use strict';

  exports['default'] = isPlural;

  function isPlural(name) {
    var lastChar = (0, _emberAllpurposeStringCharAt['default'])(name, name.length - 1);
    return lastChar === 's';
  }
});