define('hyperchannel/components/channel-input-field/component', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].TextField.extend({

    keyUp: function keyUp(ev) {
      // console.debug('keyUp', ev);

      if (ev.altKey) {
        switch (ev.key) {
          case 'k':
            this._insertAtCaret('\u0003');
            break;
        }
      }
    },

    _insertAtCaret: function _insertAtCaret(myValue) {
      var el = this.$().get(0);

      if (document.selection) {
        el.focus();
        el = document.selection.createRange();
        el.text = myValue;
        el.focus();
      } else if (el.selectionStart || el.selectionStart === '0') {
        var startPos = el.selectionStart;
        var endPos = el.selectionEnd;
        var scrollTop = el.scrollTop;
        el.value = el.value.substring(0, startPos) + myValue + el.value.substring(endPos, el.value.length);
        el.focus();
        el.selectionStart = startPos + myValue.length;
        el.selectionEnd = startPos + myValue.length;
        el.scrollTop = scrollTop;
      } else {
        el.value += myValue;
        el.focus();
      }
    }

  });
});