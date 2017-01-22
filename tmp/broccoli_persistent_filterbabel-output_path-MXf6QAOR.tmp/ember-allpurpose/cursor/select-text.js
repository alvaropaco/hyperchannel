define("ember-allpurpose/cursor/select-text", ["exports"], function (exports) {
  "use strict";

  exports["default"] = selectText;

  function selectText(text) {
    var range, selection;

    if (document.body.createTextRange) {
      //ms
      range = document.body.createTextRange();
      range.moveToElementText(text);
      range.select();
    } else if (window.getSelection) {
      //all others
      selection = window.getSelection();
      range = document.createRange();
      range.selectNodeContents(text);
      selection.removeAllRanges();
      selection.addRange(range);
    }
  }
});