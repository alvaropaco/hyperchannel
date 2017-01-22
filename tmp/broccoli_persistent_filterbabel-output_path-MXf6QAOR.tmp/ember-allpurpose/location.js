define("ember-allpurpose/location", ["exports", "ember-allpurpose/location/origin", "ember-allpurpose/location/protocol"], function (exports, _emberAllpurposeLocationOrigin, _emberAllpurposeLocationProtocol) {
  "use strict";

  exports["default"] = {
    origin: _emberAllpurposeLocationOrigin["default"],
    protocol: _emberAllpurposeLocationProtocol["default"]
  };
  exports.origin = _emberAllpurposeLocationOrigin["default"];
  exports.protocol = _emberAllpurposeLocationProtocol["default"];
});