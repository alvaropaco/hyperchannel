define('ember-allpurpose/string/shrink-new-lines', ['exports'], function (exports) {
  //only allow n consecutive newline characters
  'use strict';

  exports['default'] = function (str, n) {
    str = str || '';
    var re = new RegExp('\n{' + (n + 1) + '}', "g");
    return str.replace(re, '');
  };
});