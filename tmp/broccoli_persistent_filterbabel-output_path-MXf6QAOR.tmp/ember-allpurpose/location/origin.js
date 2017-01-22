define('ember-allpurpose/location/origin', ['exports'], function (exports) {
  'use strict';

  var origin = window.location.protocol + "//" + window.location.hostname + (window.location.port ? ':' + window.location.port : '');
  exports['default'] = origin;
});