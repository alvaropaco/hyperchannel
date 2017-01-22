define("ember-allpurpose/string", ["exports", "ember-allpurpose/string/char-at", "ember-allpurpose/string/cap-first-letter", "ember-allpurpose/string/pluralize", "ember-allpurpose/string/undescore-to-words", "ember-allpurpose/string/capitalize-words", "ember-allpurpose/string/filter-digits", "ember-allpurpose/string/trim", "ember-allpurpose/string/shrink-new-lines", "ember-allpurpose/string/test", "ember-allpurpose/string/format", "ember-allpurpose/string/get"], function (exports, _emberAllpurposeStringCharAt, _emberAllpurposeStringCapFirstLetter, _emberAllpurposeStringPluralize, _emberAllpurposeStringUndescoreToWords, _emberAllpurposeStringCapitalizeWords, _emberAllpurposeStringFilterDigits, _emberAllpurposeStringTrim, _emberAllpurposeStringShrinkNewLines, _emberAllpurposeStringTest, _emberAllpurposeStringFormat, _emberAllpurposeStringGet) {
  "use strict";

  exports["default"] = {
    charAt: _emberAllpurposeStringCharAt["default"],
    capFirstLetter: _emberAllpurposeStringCapFirstLetter["default"],
    pluralize: _emberAllpurposeStringPluralize["default"],
    underscoreToWords: _emberAllpurposeStringUndescoreToWords["default"],
    capitalizeWords: _emberAllpurposeStringCapitalizeWords["default"],
    filterDigits: _emberAllpurposeStringFilterDigits["default"],
    trim: _emberAllpurposeStringTrim["default"],
    shrinkNewLines: _emberAllpurposeStringShrinkNewLines["default"],
    test: _emberAllpurposeStringTest["default"],
    format: _emberAllpurposeStringFormat["default"],
    sget: _emberAllpurposeStringGet["default"]
  };
  exports.charAt = _emberAllpurposeStringCharAt["default"];
  exports.capFirstLetter = _emberAllpurposeStringCapFirstLetter["default"];
  exports.pluralize = _emberAllpurposeStringPluralize["default"];
  exports.underscoreToWords = _emberAllpurposeStringUndescoreToWords["default"];
  exports.capitalizeWords = _emberAllpurposeStringCapitalizeWords["default"];
  exports.filterDigits = _emberAllpurposeStringFilterDigits["default"];
  exports.trim = _emberAllpurposeStringTrim["default"];
  exports.shrinkNewLines = _emberAllpurposeStringShrinkNewLines["default"];
  exports.test = _emberAllpurposeStringTest["default"];
  exports.format = _emberAllpurposeStringFormat["default"];
  exports.sget = _emberAllpurposeStringGet["default"];
});