define('ember-allpurpose/string/dasherized-to-words', ['exports'], function (exports) {
  'use strict';

  exports['default'] = dasherizedToWords;

  function dasherizedToWords(s) {
    return s.replace(/-/g, ' ');
  }

  ;
});