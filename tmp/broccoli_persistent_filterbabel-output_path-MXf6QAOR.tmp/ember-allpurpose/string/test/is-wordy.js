define("ember-allpurpose/string/test/is-wordy", ["exports"], function (exports) {
  //validate that a string is only a word tokens (no spaces) \w\-
  "use strict";

  exports["default"] = function (str) {
    return (/^[\w\-]+$/.test(str)
    );
  };
});