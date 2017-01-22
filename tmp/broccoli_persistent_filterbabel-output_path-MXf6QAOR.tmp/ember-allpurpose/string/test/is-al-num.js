define("ember-allpurpose/string/test/is-al-num", ["exports"], function (exports) {
  //validate that a string contains only alpha numeric characters
  "use strict";

  exports["default"] = function (str) {
    return (/^[a-zA-Z0-9]+$/.test(str)
    );
  };
});