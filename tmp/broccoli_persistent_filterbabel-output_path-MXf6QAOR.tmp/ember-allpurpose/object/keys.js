define('ember-allpurpose/object/keys', ['exports'], function (exports) {
  'use strict';

  exports['default'] = function (o) {
    if (!!Object.keys) {
      return Object.keys(o);
    }
    if (o !== Object(o)) {
      throw new TypeError('Object.keys called on a non-object');
    }
    var k = [],
        p;

    for (p in o) {
      if (Object.prototype.hasOwnProperty.call(o, p)) {
        k.push(p);
      }
    }

    return k;
  };
});