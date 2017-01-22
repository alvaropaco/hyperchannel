define('ember-gestures/components/gesture-element', ['exports', 'ember', 'ember-gestures/templates/components/gesture-element', 'ember-gestures/mixins/recognizers', 'ember-allpurpose/string/dasherized-to-camel'], function (exports, _ember, _emberGesturesTemplatesComponentsGestureElement, _emberGesturesMixinsRecognizers, _emberAllpurposeStringDasherizedToCamel) {
  'use strict';

  var Component = _ember['default'].Component;

  function makeActionHandler(event, action) {

    return function actionHandler() {

      var target = this.get('target');
      var args = undefined;

      if (target && target.send) {
        args = this._getParams(action);
        target.send.apply(this, args);
      } else {
        args = this._getParams(event + 'Action');
        this.sendAction.apply(this, args);
      }
    };
  }

  /**!
   *
   * Provides the ability to easily build a
   * gesture-ful async-button implementation
   *
   */
  exports['default'] = Component.extend(_emberGesturesMixinsRecognizers['default'], {

    layout: _emberGesturesTemplatesComponentsGestureElement['default'],

    context: '',
    _getParams: function _getParams(actionName) {
      var context = this.get('context');
      return [actionName, context];
    },

    init: function init() {

      this._super();

      var v;
      var attrs = this.get('attrs') || this;

      for (var key in attrs) {

        if (attrs.hasOwnProperty(key)) {
          v = attrs[key];
          if (v === 'toString') {
            continue;
          } // ignore useless items
          if (_ember['default'].typeOf(v) === 'function') {
            continue;
          }

          //setup listener for key
          if (key.indexOf('on-') === 0) {
            var _event = (0, _emberAllpurposeStringDasherizedToCamel['default'])(key.substr(3));
            var action = attrs[key];

            this.set(_event + 'Action', action);

            this.set(_event, makeActionHandler(_event, action));
          }
        }
      }
    }

  });
});