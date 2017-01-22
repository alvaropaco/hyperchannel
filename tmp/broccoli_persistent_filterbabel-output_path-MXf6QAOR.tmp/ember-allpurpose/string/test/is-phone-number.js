define("ember-allpurpose/string/test/is-phone-number", ["exports"], function (exports) {
  //validate a US phone number
  "use strict";

  exports["default"] = function (str) {
    return (/^(\+?1[ \.-]?|1[ \.-]?)?(\([2-9]\d{2}\)|[2-9]\d{2})[ \.-]?\d{3}[ \.-]?\d{4}/.test(str)
    );
  };
});