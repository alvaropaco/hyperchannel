define('ember-allpurpose/string/dasherized-to-camel', ['exports', 'ember-allpurpose/string/capitalize-word', 'ember-allpurpose/string/uncapitalize-word', 'ember-allpurpose/string/dasherized-to-words', 'ember-allpurpose/string/capitalize-words', 'ember-allpurpose/string/strip-whitespace'], function (exports, _emberAllpurposeStringCapitalizeWord, _emberAllpurposeStringUncapitalizeWord, _emberAllpurposeStringDasherizedToWords, _emberAllpurposeStringCapitalizeWords, _emberAllpurposeStringStripWhitespace) {
  'use strict';

  exports['default'] = function (s) {
    return (0, _emberAllpurposeStringUncapitalizeWord['default'])((0, _emberAllpurposeStringStripWhitespace['default'])((0, _emberAllpurposeStringCapitalizeWords['default'])((0, _emberAllpurposeStringDasherizedToWords['default'])(s))));
  };
});