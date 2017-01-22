define("ember-allpurpose/string/test/is-credit-card", ["exports", "ember-allpurpose/string/test/is-luhn", "ember-allpurpose/string/filter-digits"], function (exports, _emberAllpurposeStringTestIsLuhn, _emberAllpurposeStringFilterDigits) {
  "use strict";

  //validate (syntactically) a credit card number

  exports["default"] = function (value, type) {
    value = (0, _emberAllpurposeStringFilterDigits["default"])(value);
    if ((0, _emberAllpurposeStringTestIsLuhn["default"])(value)) {
      var valids = [["amex", "34", 15], ["amex", "37", 15], ["disc", "6011", 16], ["mc", "51", 16], ["mc", "52", 16], ["mc", "53", 16], ["mc", "54", 16], ["mc", "55", 16], ["visa", "4", 13], ["visa", "4", 16]],
          i = valids.length;
      type = type.toLowerCase();
      while (i--) {
        if (valids[i][0] === type && value.indexOf(valids[i][1]) === 0 && valids[i][2] === value.length) {
          return true;
        }
      }
    }
    return false;
  };
});