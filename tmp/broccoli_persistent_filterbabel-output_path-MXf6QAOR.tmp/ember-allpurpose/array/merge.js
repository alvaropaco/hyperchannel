define('ember-allpurpose/array/merge', ['exports', 'ember-allpurpose/array/iterate'], function (exports, _emberAllpurposeArrayIterate) {
  'use strict';

  exports['default'] = merge;

  function merge(A, B) {
    if (!A || Object.prototype.toString.call(B) !== '[object Object]') {
      return B;
    }
    if (Object.prototype.toString.call(A) !== '[object Object]') {
      return B;
    }

    (0, _emberAllpurposeArrayIterate['default'])(Object.keys(B), function (key) {
      if (A.hasOwnProperty(key)) {
        A[key] = merge(A[key], B[key]);
      } else {
        A[key] = B[key];
      }
    });
    return A;
  }
});