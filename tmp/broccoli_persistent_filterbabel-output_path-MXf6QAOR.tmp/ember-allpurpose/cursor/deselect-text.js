define("ember-allpurpose/cursor/deselect-text", ["exports"], function (exports) {
  "use strict";

  exports["default"] = function () {
    if (document.selection) {
      document.selection.empty();
    } else {
      window.getSelection().removeAllRanges();
    }
  };
});