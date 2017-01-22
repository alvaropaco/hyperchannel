define("ember-allpurpose/string/test/is-integer", ["exports"], function (exports) {
  //validate that a string contains only 0-9 chars
  "use strict";

  exports["default"] = function (str) {
    return (/^[0-9]+$/.test(str)
    );
  };
});