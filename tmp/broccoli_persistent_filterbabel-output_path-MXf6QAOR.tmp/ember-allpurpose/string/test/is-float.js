define("ember-allpurpose/string/test/is-float", ["exports"], function (exports) {
  //validate that a string contains only 0-9 chars and a single decimal point
  "use strict";

  exports["default"] = function (str) {
    return (/^[0-9]+(\.[0-9]*)?$/.test(str)
    );
  };
});