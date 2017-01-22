define('ember-allpurpose/string/undescore-to-words', ['exports'], function (exports) {
  'use strict';

  exports['default'] = function (s) {
    return s.replace(/_/g, ' ');
  };
});