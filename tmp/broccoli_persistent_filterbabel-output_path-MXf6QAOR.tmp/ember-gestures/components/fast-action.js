define('ember-gestures/components/fast-action', ['exports', 'ember', 'ember-gestures/templates/components/fast-action'], function (exports, _ember, _emberGesturesTemplatesComponentsFastAction) {
  'use strict';

  var SafeString = _ember['default'].Handlebars.SafeString;

  exports['default'] = _ember['default'].Component.extend({
    layout: _emberGesturesTemplatesComponentsFastAction['default'],

    tagName: 'button',
    attributeBindings: ['style', 'type'],
    style: new SafeString('touch-action: manipulation; -ms-touch-action: manipulation;'),
    type: 'button',
    text: '',
    action: '',
    context: '',

    click: function click() {
      this.sendAction('action', this.get('context'));
    }

  });
});