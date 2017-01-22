define('ember-allpurpose/location/protocol', ['exports'], function (exports) {
  'use strict';

  exports['default'] = function (str) {
    var firstSlash = str.indexOf('/'),
        secondSlash = str.indexOf('/', firstSlash + 1);
    if (firstSlash !== -1) {
      if (secondSlash !== -1 && secondSlash - firstSlash === 1) {
        return str.substr(0, secondSlash + 1);
      }
      if (firstSlash === 0) {
        return '/';
      }
      return '';
    }
    return '';
  };
});