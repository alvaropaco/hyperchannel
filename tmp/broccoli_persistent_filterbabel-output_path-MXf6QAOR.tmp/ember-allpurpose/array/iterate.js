define("ember-allpurpose/array/iterate", ["exports"], function (exports) {
  "use strict";

  exports["default"] = iterate;

  function iterate(keys, fn) {
    var key;
    for (key in keys) {
      if (keys.hasOwnProperty(key)) {
        fn(keys[key]);
      }
    }
  }
});