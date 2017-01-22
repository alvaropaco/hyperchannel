define("ember-allpurpose/string/test/is-custom-protocol", ["exports", "ember-allpurpose/string/get-protocol"], function (exports, _emberAllpurposeStringGetProtocol) {
  "use strict";

  exports["default"] = isCustomProtocol;

  function isCustomProtocol(str) {
    var protocol = (0, _emberAllpurposeStringGetProtocol["default"])(str);
    return !!protocol && protocol.indexOf('http') === -1;
  }
});