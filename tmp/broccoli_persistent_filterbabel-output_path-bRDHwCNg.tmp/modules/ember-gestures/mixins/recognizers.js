import Ember from 'ember';

var inject = Ember.inject;
var Mixin = Ember.Mixin;
var on = Ember.on;

export default Mixin.create({

  '-gestures': inject.service('-gestures'),

  recognizers: null,
  managerOptions: null,
  __instance: null,
  __manager: function __manager() {
    var instance = this.get('__instance');
    if (instance) {
      return instance;
    }

    var opts = this.get('managerOptions') || { domEvents: true };

    opts.useCapture = this.get('-gestures.useCapture');
    instance = new Hammer.Manager(this.element, opts);
    this.set('__instance', instance);

    return instance;
  },

  __setupRecognizers: on('didInsertElement', function () {
    var _this = this;

    var promise = this.get('recognizers');
    if (promise) {
      promise.then(function (recognizers) {
        if (_this.get('isDestroyed')) {
          return;
        }
        var manager = _this.__manager();
        // sort the recognizers
        for (var i = 0; i < recognizers.length; i++) {
          var r = recognizers[i];
          var currentIndex = i;
          if (r.exclude.length) {
            for (var j = 0; j < r.exclude.length; j++) {
              var newIndex = recognizers.indexOf(r.exclude[j]);
              if (newIndex > 0 && currentIndex < newIndex) {
                recognizers.splice(currentIndex, 1);
                recognizers.splice(newIndex, 0, r);
                currentIndex = newIndex;
              }
            }
          }
        }

        for (var i = 0; i < recognizers.length; i++) {
          manager.add(recognizers[i]);
        }
      });
    }
  }),

  __teardownRecognizers: on('willDestroyElement', function () {
    var instance = this.get('__instance');
    if (instance) {
      //instance.off();
      instance.destroy();
      this.set('__instance', null);
    }
  }),

  init: function init() {
    this._super();

    // setup recognizers
    var recognizers = this.get('recognizers');
    if (recognizers) {
      this.set('recognizers', this.get('-gestures').retrieve(recognizers.split(' ')));
    }
  }

});