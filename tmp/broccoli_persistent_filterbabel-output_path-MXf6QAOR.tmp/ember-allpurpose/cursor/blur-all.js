define("ember-allpurpose/cursor/blur-all", ["exports"], function (exports) {
  "use strict";

  exports["default"] = function () {
    if ("activeElement" in document && document.activeElement !== document.body) {
      document.activeElement.blur();
    }
  };
});