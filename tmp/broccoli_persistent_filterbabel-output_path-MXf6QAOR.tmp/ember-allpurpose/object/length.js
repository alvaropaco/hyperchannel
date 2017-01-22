define("ember-allpurpose/object/length", ["exports", "ember-allpurpose/object/keys"], function (exports, _emberAllpurposeObjectKeys) {
  "use strict";

  exports["default"] = function (o) {
    return (0, _emberAllpurposeObjectKeys["default"])(o).length;
  };
});