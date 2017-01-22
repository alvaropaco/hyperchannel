import Ember from 'ember';
import camelize from 'ember-allpurpose/string/dasherized-to-camel';
import capitalize from 'ember-allpurpose/string/capitalize-word';
import getOwner from 'ember-getowner-polyfill';

var Service = Ember.Service;
var RSVP = Ember.RSVP;
var Promise = // jshint ignore:line
// jshint ignore:line
RSVP.Promise;
var defer = RSVP.defer;

export default Service.extend({

  _recognizers: null,

  retrieve: function retrieve(names) {
    var _this = this;

    var promises = names.map(function (name) {
      return _this.lookupRecognizer(name);
    });
    return RSVP.all(promises);
  },

  createRecognizer: function createRecognizer(name, details) {
    var eventName = camelize(details.eventName || name).toLowerCase();
    var gesture = capitalize(details.recognizer);

    var options = details.options || {};
    options.event = eventName;
    options.name = name;

    var Recognizer = new Hammer[gesture](options);
    Recognizer.initialize = defer();

    this.set('_recognizers.' + name, Recognizer);
    return Recognizer;
  },

  setupRecognizer: function setupRecognizer(name, details) {
    var _this2 = this;

    return Promise.resolve(this.createRecognizer(name, details))

    // includes
    .then(function (Recognizer) {
      if (details.include) {
        var included = details.include.map(function (name) {
          return _this2.__speedyLookupRecognizer(name);
        });
        return RSVP.all(included).then(function (recognizers) {
          Recognizer.recognizeWith(recognizers);
          return Recognizer;
        });
      }
      return Recognizer;
    })

    // excludes
    .then(function (Recognizer) {
      if (details.exclude) {
        var excluded = details.exclude.map(function (name) {
          return _this2.__speedyLookupRecognizer(name);
        });

        return RSVP.all(excluded).then(function (recognizers) {
          Recognizer.requireFailure(recognizers);
          Recognizer.exclude = recognizers;
          Recognizer.initialize.resolve(Recognizer);
          return Recognizer;
        });
      } else {
        Recognizer.exclude = [];
        Recognizer.initialize.resolve(Recognizer);
        return Recognizer;
      }
    });
  },

  __speedyLookupRecognizer: function __speedyLookupRecognizer(name) {
    var recognizer = this.get('_recognizers.' + name);
    if (recognizer) {
      return recognizer;
    }

    var path = 'ember-gesture:recognizers/' + name;
    var details = getOwner(this)._lookupFactory(path);

    if (details) {
      return this.setupRecognizer(name, details);
    }

    return Promise.reject(new Error('ember-gestures/recognizers/' + name + ' was not found. You can scaffold this recognizer with \'ember g recognizer ' + name + '\''));
  },

  lookupRecognizer: function lookupRecognizer(name) {
    var recognizer = this.get('_recognizers.' + name);
    if (recognizer) {
      return recognizer.initialize.promise.then(function (recognizer) {
        return recognizer;
      });
    }

    var path = 'ember-gesture:recognizers/' + name;
    var details = getOwner(this)._lookupFactory(path);

    if (details) {
      return this.setupRecognizer(name, details);
    }

    return Promise.reject(new Error('ember-gestures/recognizers/' + name + ' was not found. You can scaffold this recognizer with \'ember g recognizer ' + name + '\''));
  },

  init: function init() {
    this._super();
    this._recognizers = {};
  }

});