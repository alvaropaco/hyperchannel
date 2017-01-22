define('ember-allpurpose/string/capitalize-words', ['exports', 'ember-allpurpose/string/cap-first-letter'], function (exports, _emberAllpurposeStringCapFirstLetter) {
  'use strict';

  exports['default'] = function (sentence) {
    return sentence.split(' ').map(function (word) {
      return (0, _emberAllpurposeStringCapFirstLetter['default'])(word);
    }).join(' ');
  };
});