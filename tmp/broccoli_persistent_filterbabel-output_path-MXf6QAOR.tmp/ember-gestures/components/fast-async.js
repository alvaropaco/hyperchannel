define('ember-gestures/components/fast-async', ['exports', 'ember', 'ember-gestures/templates/components/fast-async', 'ember-gestures/components/async-element'], function (exports, _ember, _emberGesturesTemplatesComponentsFastAsync, _emberGesturesComponentsAsyncElement) {
  'use strict';

  var SafeString = _ember['default'].Handlebars.SafeString;

  exports['default'] = _emberGesturesComponentsAsyncElement['default'].extend({

    layout: _emberGesturesTemplatesComponentsFastAsync['default'],
    tagName: 'button',
    attributeBindings: ['style', 'disabled', 'type'],
    style: new SafeString('touch-action: manipulation; -ms-touch-action: manipulation;'),
    type: 'button',
    text: '',
    context: null

  });
});