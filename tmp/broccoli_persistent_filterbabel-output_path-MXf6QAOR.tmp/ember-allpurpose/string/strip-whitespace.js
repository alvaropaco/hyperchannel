define('ember-allpurpose/string/strip-whitespace', ['exports'], function (exports) {
  'use strict';

  exports['default'] = stripWhiteSpace;

  function stripWhiteSpace(s) {
    return s.replace(/\s/g, '');
  }
});