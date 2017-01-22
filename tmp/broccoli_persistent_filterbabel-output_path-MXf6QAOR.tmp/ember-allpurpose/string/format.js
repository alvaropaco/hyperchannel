define('ember-allpurpose/string/format', ['exports', 'ember-allpurpose/string/format/phone-number', 'ember-allpurpose/string/format/append-url-protocol'], function (exports, _emberAllpurposeStringFormatPhoneNumber, _emberAllpurposeStringFormatAppendUrlProtocol) {
  'use strict';

  exports['default'] = {

    phoneNumber: _emberAllpurposeStringFormatPhoneNumber['default'],

    //does not necessarily return a valid url, use with isURLy
    appendUrlProtocol: _emberAllpurposeStringFormatAppendUrlProtocol['default']
  };
  exports.phoneNumber = _emberAllpurposeStringFormatPhoneNumber['default'];
  exports.appendUrlProtocol = _emberAllpurposeStringFormatAppendUrlProtocol['default'];
});