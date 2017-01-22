define("ember-allpurpose/string/test/is-email", ["exports"], function (exports) {
  //see http://www.regular-expressions.info/email.html for discussion
  "use strict";

  exports["default"] = function (str) {
    return (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(str)
    );
  };
});