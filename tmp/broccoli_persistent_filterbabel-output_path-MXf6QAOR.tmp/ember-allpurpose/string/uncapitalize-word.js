define("ember-allpurpose/string/uncapitalize-word", ["exports"], function (exports) {
  "use strict";

  exports["default"] = function (s) {
    return s.charAt(0).toLowerCase() + s.slice(1);
  };
});