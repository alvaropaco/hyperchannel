define('ember-allpurpose/cursor/get-position', ['exports', 'ember-allpurpose/dom/is-jquery'], function (exports, _emberAllpurposeDomIsJquery) {
  'use strict';

  exports['default'] = getCursorPosition;

  /**
   *
   * @param input element or jQuery element
   * @return Number the index of the caret in the element
   */
  function getCursorPosition(input) {

    if (input && (0, _emberAllpurposeDomIsJquery['default'])(input)) {
      input = input.get(0);
    }

    // Standard-compliant browsers
    if ('selectionStart' in input) {
      return input.selectionStart;

      // IE
    } else if (document.selection) {
        input.focus();
        var sel = document.selection.createRange();
        var selLen = document.selection.createRange().text.length;
        sel.moveStart('character', -input.value.length);
        return sel.text.length - selLen;
      }
  }
});