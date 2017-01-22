define("ember-allpurpose/string/capitalize-word", ["exports"], function (exports) {
  "use strict";

  exports["default"] = function (s) {
    return s.charAt(0).toUpperCase() + s.slice(1);
  };
});