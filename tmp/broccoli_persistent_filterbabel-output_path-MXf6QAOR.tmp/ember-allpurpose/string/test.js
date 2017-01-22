define("ember-allpurpose/string/test", ["exports", "ember-allpurpose/string/test/is-luhn", "ember-allpurpose/string/test/is-email", "ember-allpurpose/string/test/is-urly", "ember-allpurpose/string/test/is-phone-number", "ember-allpurpose/string/test/is-credit-card", "ember-allpurpose/string/test/is-al-num", "ember-allpurpose/string/test/is-lowercase", "ember-allpurpose/string/test/is-integer", "ember-allpurpose/string/test/is-float", "ember-allpurpose/string/test/is-wordy", "ember-allpurpose/string/test/has-no-whitespace"], function (exports, _emberAllpurposeStringTestIsLuhn, _emberAllpurposeStringTestIsEmail, _emberAllpurposeStringTestIsUrly, _emberAllpurposeStringTestIsPhoneNumber, _emberAllpurposeStringTestIsCreditCard, _emberAllpurposeStringTestIsAlNum, _emberAllpurposeStringTestIsLowercase, _emberAllpurposeStringTestIsInteger, _emberAllpurposeStringTestIsFloat, _emberAllpurposeStringTestIsWordy, _emberAllpurposeStringTestHasNoWhitespace) {
  "use strict";

  //various type tests
  exports["default"] = {
    isLuhn: _emberAllpurposeStringTestIsLuhn["default"],
    isEmail: _emberAllpurposeStringTestIsEmail["default"],
    isURLy: _emberAllpurposeStringTestIsUrly["default"],
    isPhoneNumber: _emberAllpurposeStringTestIsPhoneNumber["default"],
    isCreditCard: _emberAllpurposeStringTestIsCreditCard["default"],
    isAlNum: _emberAllpurposeStringTestIsAlNum["default"],
    isLowercase: _emberAllpurposeStringTestIsLowercase["default"],
    isInteger: _emberAllpurposeStringTestIsInteger["default"],
    isFloat: _emberAllpurposeStringTestIsFloat["default"],
    isWordy: _emberAllpurposeStringTestIsWordy["default"],
    hasNoWhitespace: _emberAllpurposeStringTestHasNoWhitespace["default"]
  };
  exports.isLuhn = _emberAllpurposeStringTestIsLuhn["default"];
  exports.isEmail = _emberAllpurposeStringTestIsEmail["default"];
  exports.isURLy = _emberAllpurposeStringTestIsUrly["default"];
  exports.isPhoneNumber = _emberAllpurposeStringTestIsPhoneNumber["default"];
  exports.isCreditCard = _emberAllpurposeStringTestIsCreditCard["default"];
  exports.isAlNum = _emberAllpurposeStringTestIsAlNum["default"];
  exports.isLowercase = _emberAllpurposeStringTestIsLowercase["default"];
  exports.isInteger = _emberAllpurposeStringTestIsInteger["default"];
  exports.isFloat = _emberAllpurposeStringTestIsFloat["default"];
  exports.isWordy = _emberAllpurposeStringTestIsWordy["default"];
  exports.hasNoWhitespace = _emberAllpurposeStringTestHasNoWhitespace["default"];
});