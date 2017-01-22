import Ember from 'ember';
import layout from '../templates/components/gesture-element';
import RecognizerMixin from '../mixins/recognizers';
import toCamel from 'ember-allpurpose/string/dasherized-to-camel';

var Component = Ember.Component;

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
export default Component.extend(RecognizerMixin, {

  layout: layout,

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
        if (Ember.typeOf(v) === 'function') {
          continue;
        }

        //setup listener for key
        if (key.indexOf('on-') === 0) {
          var _event = toCamel(key.substr(3));
          var action = attrs[key];

          this.set(_event + 'Action', action);

          this.set(_event, makeActionHandler(_event, action));
        }
      }
    }
  }

});