define("ember-allpurpose/dom", ["exports", "ember-allpurpose/dom/is-element", "ember-allpurpose/dom/is-jquery"], function (exports, _emberAllpurposeDomIsElement, _emberAllpurposeDomIsJquery) {
  "use strict";

  exports["default"] = {
    isElement: _emberAllpurposeDomIsElement["default"],
    isJQuery: _emberAllpurposeDomIsJquery["default"]
  };
  exports.isElement = _emberAllpurposeDomIsElement["default"];
  exports.isJQuery = _emberAllpurposeDomIsJquery["default"];
});