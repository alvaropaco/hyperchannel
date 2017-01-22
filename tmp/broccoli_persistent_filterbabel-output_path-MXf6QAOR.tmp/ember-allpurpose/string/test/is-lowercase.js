define("ember-allpurpose/string/test/is-lowercase", ["exports"], function (exports) {
  //validate that a string contains only lower case characters
  "use strict";

  exports["default"] = function (str) {
    return !/[A-Z]/.test(str);
  };
});
//numbers and symbols are ignored