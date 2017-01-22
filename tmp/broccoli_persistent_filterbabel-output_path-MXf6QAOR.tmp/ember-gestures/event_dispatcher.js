define('ember-gestures/event_dispatcher', ['exports', 'ember', 'ember-gestures/hammer-events', 'ember-allpurpose/string/dasherized-to-camel', 'jquery', 'ember-gestures/utils/is-mobile', 'ember-getowner-polyfill'], function (exports, _ember, _emberGesturesHammerEvents, _emberAllpurposeStringDasherizedToCamel, _jquery, _emberGesturesUtilsIsMobile, _emberGetownerPolyfill) {
  'use strict';

  var ROOT_ELEMENT_CLASS = 'ember-application';
  var ROOT_ELEMENT_SELECTOR = '.' + ROOT_ELEMENT_CLASS;

  var eventEndings = {
    pan: ['Start', 'Move', 'End', 'Cancel', 'Left', 'Right', 'Up', 'Down'],
    pinch: ['Start', 'Move', 'End', 'Cancel', 'In', 'Out'],
    press: ['Up'],
    rotate: ['Start', 'Move', 'End', 'Cancel'],
    swipe: ['Left', 'Right', 'Up', 'Down'],
    tap: []
  };

  var assert = _ember['default'].assert;
  var EventDispatcher = _ember['default'].EventDispatcher;
  var merge = _ember['default'].merge;
  var isNone = _ember['default'].isNone;
  var set = _ember['default'].set;
  var get = _ember['default'].get;

  var assign = _ember['default'].assign || merge;

  exports['default'] = EventDispatcher.extend({

    /**
     Whether or not to cache handler paths on the element
     when `useCapture` is also true.
     This needs to be replaced by a feature flag.
     @private
     @type {boolean}
     */
    useFastPaths: false,
    useCapture: false,

    canDispatchToEventManager: false,

    _gestures: null,
    _initializeGestures: function _initializeGestures() {
      var _this = this;

      var list = getModuleList();
      var events = assign({}, _emberGesturesHammerEvents['default']);

      list.forEach(function (name) {
        var recognizer = (0, _emberGetownerPolyfill['default'])(_this)._lookupFactory('ember-gesture:recognizers/' + name);

        if (recognizer) {
          addEvent(events, recognizer.recognizer, recognizer.eventName || name);
        }
      });

      // add them to the event dispatcher
      this.set('_gestures', events);
    },

    _fastFocus: function _fastFocus() {
      var $root = (0, _jquery['default'])(this.get('rootElement'));
      $root.on('click.ember-gestures, touchend.ember-gestures', function (e) {

        /*
         Implements fastfocus mechanisms on mobile web/Cordova
         */
        if (_emberGesturesUtilsIsMobile['default'].is()) {
          var $element = (0, _jquery['default'])(e.currentTarget);
          var $target = (0, _jquery['default'])(e.target);

          /*
           If the click was on an input element that needs to be able to focus, recast
           the click as a "focus" event.
           This fixes tap events on mobile where keyboardShrinksView or similar is true.
           Such devices depend on the ghost click to trigger focus, but the ghost click
           will never reach the element.
           */
          var notFocusableTypes = ['submit', 'file', 'button', 'hidden', 'reset', 'range', 'radio', 'image', 'checkbox'];

          //fastfocus
          if ($element.is('textarea') || $element.is('input') && notFocusableTypes.indexOf($element.attr('type')) === -1) {
            $element.focus();
          } else if ($target.is('textarea') || $target.is('input') && notFocusableTypes.indexOf($target.attr('type')) === -1) {
            $target.focus();
          }
        }
      });
    },

    willDestroy: function willDestroy() {
      (0, _jquery['default'])(this.get('rootElement')).off('.ember-gestures');
      this._super.apply(this, arguments);
    },

    _finalEvents: null,

    setup: function setup(addedEvents, rootElement) {
      this._initializeGestures();
      var events = this._finalEvents = assign({}, get(this, 'events'));

      var event = undefined;

      // remove undesirable events from Ember's Eventing
      if (this.get('removeTracking')) {
        events.touchstart = null;
        events.touchmove = null;
        events.touchcancel = null;
        events.touchend = null;

        events.mousedown = null;
        events.mouseenter = null;
        events.mousemove = null;
        events.mouseleave = null;
        events.mouseup = null;

        events.drag = null;
        events.dragend = null;
        events.dragenter = null;
        events.dragleave = null;
        events.dragover = null;
        events.dragstart = null;
        events.drop = null;

        events.dblclick = null;
      }

      // assign custom events into Ember's Eventing
      assign(events, addedEvents || {});

      // delete unwanted events
      for (event in events) {
        if (events.hasOwnProperty(event)) {
          if (!events[event]) {
            delete events[event];
          }
        }
      }

      // assign our events into Ember's Eventing
      assign(events, this.get('_gestures'));

      if (!isNone(rootElement)) {
        set(this, 'rootElement', rootElement);
      }
      this._fastFocus();

      rootElement = (0, _jquery['default'])(get(this, 'rootElement'));

      assert('You cannot use the same root element (' + (rootElement.selector || rootElement[0].tagName) + ') multiple times in an Ember.Application', !rootElement.is(ROOT_ELEMENT_SELECTOR));
      assert('You cannot make a new Ember.Application using a root element that is a descendent of an existing Ember.Application', !rootElement.closest(ROOT_ELEMENT_SELECTOR).length);
      assert('You cannot make a new Ember.Application using a root element that is an ancestor of an existing Ember.Application', !rootElement.find(ROOT_ELEMENT_SELECTOR).length);

      rootElement.addClass(ROOT_ELEMENT_CLASS);

      assert('Unable to add \'' + ROOT_ELEMENT_CLASS + '\' class to rootElement. Make sure you set rootElement to the body or an element in the body.', rootElement.is(ROOT_ELEMENT_SELECTOR));

      for (event in events) {
        if (events.hasOwnProperty(event)) {
          this.setupHandler(rootElement, event, events[event]);
        }
      }
    }

  });

  function addEvent(hash, gesture, name) {
    var eventName = (0, _emberAllpurposeStringDasherizedToCamel['default'])(name);
    var eventBase = eventName.toLowerCase();
    var endings = eventEndings[gesture];

    hash[eventBase] = eventName;
    endings.forEach(function (ending) {
      var event = eventName + ending;

      hash[event.toLowerCase()] = event;
    });
  }

  // this function can be replaced in ember 1.13 with a private api
  // and in ember 2.0 with a potentially public api matching 1.13's
  // private api. This is a stop gap for pre-ember 1.13
  function getModuleList() {
    /* global requirejs */
    var list = [];

    for (var moduleName in requirejs.entries) {
      if (requirejs.entries.hasOwnProperty(moduleName)) {
        var parts = moduleName.match(/ember-gestures\/recognizers\/(.*)/);

        if (parts && parts[1].indexOf('jshint') === -1) {
          list.push(parts[1]);
        }
      }
    }
    return list;
  }
});