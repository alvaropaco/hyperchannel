define('ember-gestures/components/context-element', ['exports', 'ember-gestures/components/gesture-element'], function (exports, _emberGesturesComponentsGestureElement) {
  'use strict';

  exports['default'] = _emberGesturesComponentsGestureElement['default'].extend({

    _getParams: function _getParams(actionName) {
      var actionArguments = this._super(actionName);
      actionArguments.splice(1, 0, this.element);
      return actionArguments;
    }

  });
});