define('ember-hammertime/mixins/touch-action', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  var computed = _ember['default'].computed;
  var Mixin = _ember['default'].Mixin;
  var Handlebars = _ember['default'].Handlebars;
  var SafeString = Handlebars.SafeString;

  exports['default'] = Mixin.create({
    attributeBindings: ['touchActionStyle:style'],
    touchActionStyle: computed(function () {
      // we apply if click is present
      var applyStyle = this.click;

      if (!applyStyle) {
        // we apply if tagName
        var tagName = this.get('tagName');
        var type = this.get('type');

        var isFocusable = ['select', 'button', 'input', 'a', 'textarea'].indexOf(tagName) !== -1;

        if (isFocusable) {
          if (tagName === 'input') {
            isFocusable = ['button', 'submit', 'text', 'file'].indexOf(type) !== -1;
          }
        }

        applyStyle = isFocusable;
      }

      return new SafeString(applyStyle ? 'touch-action: manipulation; -ms-touch-action: manipulation;' : '');
    })
  });
});