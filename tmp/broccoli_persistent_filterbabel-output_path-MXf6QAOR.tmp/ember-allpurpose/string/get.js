define('ember-allpurpose/string/get', ['exports', 'ember-allpurpose/string/get/occurrence', 'ember-allpurpose/string/get/occurrence-index', 'ember-allpurpose/string/get/protocol'], function (exports, _emberAllpurposeStringGetOccurrence, _emberAllpurposeStringGetOccurrenceIndex, _emberAllpurposeStringGetProtocol) {
  'use strict';

  exports['default'] = {
    occurrenceIndex: _emberAllpurposeStringGetOccurrenceIndex['default'],
    occurrence: _emberAllpurposeStringGetOccurrence['default'],
    protocol: _emberAllpurposeStringGetProtocol['default']
  };
  exports.protocol = _emberAllpurposeStringGetProtocol['default'];
  exports.occurrence = _emberAllpurposeStringGetOccurrence['default'];
  exports.occurrenceIndex = _emberAllpurposeStringGetOccurrenceIndex['default'];
});