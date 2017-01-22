define("ember-allpurpose/dom/is-jquery", ["exports"], function (exports) {
  /*global jQuery*/
  "use strict";

  exports["default"] = function (o) {
    return jQuery && o instanceof jQuery;
  };
});