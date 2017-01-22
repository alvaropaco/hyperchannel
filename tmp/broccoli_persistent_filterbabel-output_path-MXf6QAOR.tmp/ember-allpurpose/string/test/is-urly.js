define("ember-allpurpose/string/test/is-urly", ["exports"], function (exports) {
  //perfect url detection is hard, this just checks that there's some semblance of a TLD
  "use strict";

  exports["default"] = function (str) {
    var regex = /^(http(s)?\:\/\/)?[a-zA-Z0-9][a-zA-Z0-9\-]*\.[a-zA-Z]{2}/;
    return regex.test(str);
  };
});