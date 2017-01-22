define('ember-allpurpose/string/get/singular', ['exports', 'ember-allpurpose/string/test/is-plural'], function (exports, _emberAllpurposeStringTestIsPlural) {
  'use strict';

  exports['default'] = getSingular;

  function getSingular(str) {
    if ((0, _emberAllpurposeStringTestIsPlural['default'])(str)) {
      return str.substring(0, str.length - 1);
    }
    return str;
  }
});