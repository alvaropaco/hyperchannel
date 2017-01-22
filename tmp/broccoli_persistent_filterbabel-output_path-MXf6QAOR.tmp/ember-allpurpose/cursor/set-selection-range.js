define('ember-allpurpose/cursor/set-selection-range', ['exports', 'ember-allpurpose/dom/is-jquery'], function (exports, _emberAllpurposeDomIsJquery) {
  'use strict';

  exports['default'] = setSelectionRange;

  /**
   *
   * @param input element or jQuery element
   * @param start the index at which to begin the selection
   * @param end the index after which to end the selection
   */
  function setSelectionRange(input, start, end) {

    if (input && (0, _emberAllpurposeDomIsJquery['default'])(input)) {
      input = input.get(0);
    }

    if (input.setSelectionRange) {
      input.focus();
      input.setSelectionRange(start, end);
    } else if (input.createTextRange) {
      var range = input.createTextRange();
      range.collapse(true);
      range.moveEnd('character', end);
      range.moveStart('character', start);
      range.select();
    }
  }
});