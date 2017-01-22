define('ember-allpurpose/string/trim', ['exports'], function (exports) {
  //remove beginning and ending whitespace
  'use strict';

  exports['default'] = function (str) {
    str = str || '';
    return str.replace(/^\s+|\s+$/g, '');
  };
});