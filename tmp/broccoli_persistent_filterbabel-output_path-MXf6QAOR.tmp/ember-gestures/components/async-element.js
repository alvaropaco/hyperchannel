define('ember-gestures/components/async-element', ['exports', 'ember', 'ember-gestures/components/gesture-element'], function (exports, _ember, _emberGesturesComponentsGestureElement) {
  'use strict';

  var computed = _ember['default'].computed;
  var observer = _ember['default'].observer;
  var get = _ember['default'].get;

  /**!
   *
   * Provides the ability to easily build a
   * gesture-ful async-button implementation
   *
   */
  exports['default'] = _emberGesturesComponentsGestureElement['default'].extend({

    classNameBindings: ['actionState'],
    actionState: 'default',

    isPending: computed('actionState', function () {
      return this.get('actionState') === 'pending';
    }),

    _getParams: function _getParams(actionName) {
      var _this = this;

      var actionArguments = this._super(actionName);

      var callbackHandler = function callbackHandler(promise) {
        _this.set('promise', promise);
        _this.set('actionState', 'pending');
      };

      actionArguments.splice(1, 0, callbackHandler);
      return actionArguments;
    },

    __observePromiseState: observer('promise', function promiseTheComponentState() {
      var _this2 = this;

      get(this, 'promise').then(function () {
        if (!_this2.isDestroyed) {
          _this2.set('actionState', 'fulfilled');
        }
      })['catch'](function () {
        if (!_this2.isDestroyed) {
          _this2.set('actionState', 'rejected');
        }
      });
    })

  });
});