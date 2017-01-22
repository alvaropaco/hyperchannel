define('ember-allpurpose/cursor/set-position', ['exports', 'ember-allpurpose/cursor/set-selection-range'], function (exports, _emberAllpurposeCursorSetSelectionRange) {
  'use strict';

  /**
   *
   * @param $element element or jQuery element
   * @param index the index at which to place the caret
   */
  function setCursorPosition($element, index) {
    (0, _emberAllpurposeCursorSetSelectionRange['default'])($element, index, index);
  }
});