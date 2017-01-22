define("ember-allpurpose/array/in-array", ["exports"], function (exports) {
  "use strict";

  exports["default"] = function (a, v) {
    return !! ~a.indexOf(v);
  };
});