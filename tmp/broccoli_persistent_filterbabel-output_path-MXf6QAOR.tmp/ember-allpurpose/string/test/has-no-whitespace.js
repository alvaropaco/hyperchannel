define("ember-allpurpose/string/test/has-no-whitespace", ["exports"], function (exports) {
  //validate that a string does not contain whitespace
  "use strict";

  exports["default"] = function (str) {
    return !/\s/.test(str);
  };
});