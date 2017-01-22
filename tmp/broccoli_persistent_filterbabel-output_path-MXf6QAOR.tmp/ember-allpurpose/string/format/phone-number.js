define('ember-allpurpose/string/format/phone-number', ['exports', 'ember-allpurpose/string/char-at', 'ember-allpurpose/string/filter-digits'], function (exports, _emberAllpurposeStringCharAt, _emberAllpurposeStringFilterDigits) {
  'use strict';

  exports['default'] = function (num, format) {

    num = num || '';

    /*
     formats
     ----------------------------
     dot    :   1.234.567.8910
     dash   :   1-234-567-8910 (default)
     pretty :   +1 (234) 567-8910
     */
    var formats = {
      dot: ['1', '.', '.', '.'],
      dash: ['1', '-', '-', '-'],
      pretty: ['+1 ', '(', ') ', '-'],
      plain: ['', '', '', ''],
      'us-plain': ['1', '', '', '']
    },

    //select correct format
    form = format && formats.hasOwnProperty(format) ? formats[format] : formats.dash,

    //strip any existing formatting
    numb = (0, _emberAllpurposeStringFilterDigits['default'])(num),

    //0 if 1 is not present, 1 otherwise
    adj = 0;

    if ((0, _emberAllpurposeStringCharAt['default'])(numb, 0) === '1') {
      adj = 1;
    }
    return numb.replace(/^1?(\d{0,3})(\d{0,3})(\d{0,4})?$/, function (match, p1, p2, p3) {
      var formatted = form[0] + form[1] + p1;
      if (p2) {
        formatted += form[2] + p2;
      }
      if (p3) {
        formatted += form[3] + p3;
      }
      return formatted;
    });
  };
});