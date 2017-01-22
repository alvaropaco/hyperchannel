define('ember-allpurpose/runspired-utils', ['exports', 'ember-allpurpose/dom', 'ember-allpurpose/array', 'ember-allpurpose/cookie', 'ember-allpurpose/location', 'ember-allpurpose/object', 'ember-allpurpose/string', 'ember-allpurpose/animate', 'ember-allpurpose/cursor'], function (exports, _emberAllpurposeDom, _emberAllpurposeArray, _emberAllpurposeCookie, _emberAllpurposeLocation, _emberAllpurposeObject, _emberAllpurposeString, _emberAllpurposeAnimate, _emberAllpurposeCursor) {
  'use strict';

  exports['default'] = {
    dom: _emberAllpurposeDom['default'],
    cookie: _emberAllpurposeCookie['default'],
    location: _emberAllpurposeLocation['default'],
    array: _emberAllpurposeArray['default'],
    string: _emberAllpurposeString['default'],
    object: _emberAllpurposeObject['default'],
    animate: _emberAllpurposeAnimate['default'],
    cursor: _emberAllpurposeCursor['default']
  };
  exports.dom = _emberAllpurposeDom['default'];
  exports.array = _emberAllpurposeArray['default'];
  exports.cookie = _emberAllpurposeCookie['default'];
  exports.location = _emberAllpurposeLocation['default'];
  exports.object = _emberAllpurposeObject['default'];
  exports.string = _emberAllpurposeString['default'];
  exports.animate = _emberAllpurposeAnimate['default'];
  exports.cursor = _emberAllpurposeCursor['default'];
});