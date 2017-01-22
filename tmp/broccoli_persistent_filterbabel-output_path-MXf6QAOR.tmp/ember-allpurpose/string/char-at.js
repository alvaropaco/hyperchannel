define("ember-allpurpose/string/char-at", ["exports"], function (exports) {
  "use strict";

  exports["default"] = function (str, i) {
    return str.substring(i, i + 1);
  };
});