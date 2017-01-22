define("ember-allpurpose/dom/is-element", ["exports"], function (exports) {
  "use strict";

  exports["default"] = function (o) {
    return typeof HTMLElement === "object" ? o instanceof HTMLElement : //DOM2
    o && typeof o === "object" && o !== null && o.nodeType === 1 && typeof o.nodeName === "string";
  };
});