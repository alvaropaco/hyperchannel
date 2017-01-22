define('ember-allpurpose/string/filter-digits', ['exports'], function (exports) {
  //filter everything but 0-9 characters from a string
  'use strict';

  exports['default'] = function (str) {
    return str.replace(/[^\d]/g, '');
  };
});