"use strict";

/* jshint ignore:start */



/* jshint ignore:end */

define('hyperchannel/app', ['exports', 'ember', 'hyperchannel/resolver', 'ember-load-initializers', 'hyperchannel/config/environment'], function (exports, _ember, _hyperchannelResolver, _emberLoadInitializers, _hyperchannelConfigEnvironment) {

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _hyperchannelConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _hyperchannelConfigEnvironment['default'].podModulePrefix,
    Resolver: _hyperchannelResolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _hyperchannelConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});
define('hyperchannel/components/app-container/component', ['exports', 'ember', 'ember-gestures/mixins/recognizers'], function (exports, _ember, _emberGesturesMixinsRecognizers) {
  exports['default'] = _ember['default'].Component.extend(_emberGesturesMixinsRecognizers['default'], {

    tagName: 'div',
    classNames: ['app-container'],
    classNameBindings: ['showGlobalMenu:global-menu-open', 'showChannelMenu:channel-menu-open'],

    recognizers: 'swipeleft swiperight',

    swipeLeft: function swipeLeft() {
      this.set('showGlobalMenu', false);
    },

    swipeRight: function swipeRight() {
      this.set('showGlobalMenu', true);
    }

  });
});
define("hyperchannel/components/app-container/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.8.3",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "hyperchannel/components/app-container/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["content", "yield", ["loc", [null, [1, 0], [1, 9]]], 0, 0, 0, 0]],
      locals: [],
      templates: []
    };
  })());
});
define('hyperchannel/components/app-version', ['exports', 'ember-cli-app-version/components/app-version', 'hyperchannel/config/environment'], function (exports, _emberCliAppVersionComponentsAppVersion, _hyperchannelConfigEnvironment) {

  var name = _hyperchannelConfigEnvironment['default'].APP.name;
  var version = _hyperchannelConfigEnvironment['default'].APP.version;

  exports['default'] = _emberCliAppVersionComponentsAppVersion['default'].extend({
    version: version,
    name: name
  });
});
define('hyperchannel/components/channel-container/component', ['exports', 'ember'], function (exports, _ember) {

  function scrollToBottom() {
    _ember['default'].$('#channel-content').animate({
      scrollTop: _ember['default'].$('#channel-content ul').height()
    }, '500');
  }

  exports['default'] = _ember['default'].Component.extend({

    elementId: 'channel',
    newMessage: '',
    channel: null,

    messagesUpdated: _ember['default'].observer('channel.messages.[]', function () {
      _ember['default'].run.scheduleOnce('afterRender', scrollToBottom);
    }),

    actions: {

      processMessageOrCommand: function processMessageOrCommand() {
        if (this.get('newMessage').substr(0, 1) === "/") {
          this.attrs.onCommand(this.get('newMessage'));
        } else {
          this.attrs.onMessage(this.get('newMessage'));
        }
      },

      menu: function menu(which, what) {
        this.sendAction("menu", which, what);
      }

    }
  });
});
define("hyperchannel/components/channel-container/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@2.8.3",
          "loc": {
            "source": null,
            "start": {
              "line": 12,
              "column": 4
            },
            "end": {
              "line": 16,
              "column": 4
            }
          },
          "moduleName": "hyperchannel/components/channel-container/template.hbs"
        },
        isEmpty: false,
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("      ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("li");
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n      ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 1, 1);
          return morphs;
        },
        statements: [["inline", "component", [["get", "message.type", ["loc", [null, [14, 20], [14, 32]]], 0, 0, 0, 0]], ["message", ["subexpr", "@mut", [["get", "message", ["loc", [null, [14, 41], [14, 48]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [14, 8], [14, 50]]], 0, 0]],
        locals: ["message"],
        templates: []
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "revision": "Ember@2.8.3",
          "loc": {
            "source": null,
            "start": {
              "line": 44,
              "column": 6
            },
            "end": {
              "line": 44,
              "column": 67
            }
          },
          "moduleName": "hyperchannel/components/channel-container/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createElement("i");
          dom.setAttribute(el1, "class", "icon-users");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    var child2 = (function () {
      return {
        meta: {
          "revision": "Ember@2.8.3",
          "loc": {
            "source": null,
            "start": {
              "line": 44,
              "column": 125
            },
            "end": {
              "line": 44,
              "column": 172
            }
          },
          "moduleName": "hyperchannel/components/channel-container/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createElement("i");
          dom.setAttribute(el1, "class", "icon-cog");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    var child3 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "revision": "Ember@2.8.3",
            "loc": {
              "source": null,
              "start": {
                "line": 50,
                "column": 12
              },
              "end": {
                "line": 50,
                "column": 65
              }
            },
            "moduleName": "hyperchannel/components/channel-container/template.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
            dom.insertBoundary(fragment, 0);
            dom.insertBoundary(fragment, null);
            return morphs;
          },
          statements: [["content", "username", ["loc", [null, [50, 53], [50, 65]]], 0, 0, 0, 0]],
          locals: [],
          templates: []
        };
      })();
      return {
        meta: {
          "revision": "Ember@2.8.3",
          "loc": {
            "source": null,
            "start": {
              "line": 49,
              "column": 6
            },
            "end": {
              "line": 51,
              "column": 6
            }
          },
          "moduleName": "hyperchannel/components/channel-container/template.hbs"
        },
        isEmpty: false,
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("        ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("li");
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 0, 0);
          return morphs;
        },
        statements: [["block", "link-to", ["space.userChannel", ["get", "username", ["loc", [null, [50, 43], [50, 51]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [50, 12], [50, 77]]]]],
        locals: ["username"],
        templates: [child0]
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.8.3",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 55,
            "column": 0
          }
        },
        "moduleName": "hyperchannel/components/channel-container/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("main");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("header");
        dom.setAttribute(el2, "style", "touch-action: manipulation; -ms-touch-action: manipulation;");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("h2");
        dom.setAttribute(el3, "id", "channel-name");
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("p");
        dom.setAttribute(el3, "id", "channel-title");
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("nav");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("a");
        dom.setAttribute(el4, "href", "#");
        dom.setAttribute(el4, "style", "touch-action: manipulation; -ms-touch-action: manipulation;");
        var el5 = dom.createElement("i");
        dom.setAttribute(el5, "class", "icon-megaphone");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("a");
        dom.setAttribute(el4, "href", "#");
        dom.setAttribute(el4, "style", "touch-action: manipulation; -ms-touch-action: manipulation;");
        var el5 = dom.createElement("i");
        dom.setAttribute(el5, "class", "icon-mute");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("section");
        dom.setAttribute(el2, "id", "channel-content");
        dom.setAttribute(el2, "class", "main");
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("ul");
        var el4 = dom.createTextNode("\n");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("    ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("\n    <li>\n      <div class=\"chat-message user-raucao\">\n        <span class=\"username\" data-username=\"silverbucket\">silverbucket</span>\n        <span class=\"message\">you're already here?!</span>\n      </div>\n    </li>\n    ");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n  ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("footer");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("section");
        dom.setAttribute(el3, "id", "new-message");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("form");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("aside");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("header");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("nav");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("a");
        dom.setAttribute(el4, "href", "#");
        dom.setAttribute(el4, "style", "touch-action: manipulation; -ms-touch-action: manipulation;");
        var el5 = dom.createElement("i");
        dom.setAttribute(el5, "class", "icon-paperclip");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("a");
        dom.setAttribute(el4, "href", "#");
        dom.setAttribute(el4, "style", "touch-action: manipulation; -ms-touch-action: manipulation;");
        var el5 = dom.createElement("i");
        dom.setAttribute(el5, "class", "icon-resize-enlarge");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("section");
        dom.setAttribute(el2, "id", "user-list");
        dom.setAttribute(el2, "class", "main");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("ul");
        var el4 = dom.createTextNode("\n");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0]);
        var element1 = dom.childAt(element0, [1]);
        var element2 = dom.childAt(element0, [5, 1, 1]);
        var element3 = dom.childAt(fragment, [2]);
        var element4 = dom.childAt(element3, [1, 1]);
        var morphs = new Array(9);
        morphs[0] = dom.createElementMorph(element1);
        morphs[1] = dom.createMorphAt(dom.childAt(element1, [1]), 0, 0);
        morphs[2] = dom.createMorphAt(dom.childAt(element1, [3]), 0, 0);
        morphs[3] = dom.createMorphAt(dom.childAt(element0, [3, 1]), 1, 1);
        morphs[4] = dom.createElementMorph(element2);
        morphs[5] = dom.createMorphAt(element2, 1, 1);
        morphs[6] = dom.createMorphAt(element4, 1, 1);
        morphs[7] = dom.createMorphAt(element4, 3, 3);
        morphs[8] = dom.createMorphAt(dom.childAt(element3, [3, 1]), 1, 1);
        return morphs;
      },
      statements: [["element", "action", ["menu", "global", "toggle"], [], ["loc", [null, [2, 10], [2, 45]]], 0, 0], ["content", "channel.name", ["loc", [null, [3, 26], [3, 42]]], 0, 0, 0, 0], ["content", "channel.formattedTopic", ["loc", [null, [4, 26], [4, 52]]], 0, 0, 0, 0], ["block", "each", [["get", "channel.messages", ["loc", [null, [12, 12], [12, 28]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [12, 4], [16, 13]]]], ["element", "action", ["processMessageOrCommand"], ["on", "submit"], ["loc", [null, [30, 12], [30, 60]]], 0, 0], ["inline", "channel-input-field", [], ["value", ["subexpr", "@mut", [["get", "newMessage", ["loc", [null, [31, 36], [31, 46]]], 0, 0, 0, 0]], [], [], 0, 0], "placeholder", "Type a message and hit enter", "name", "chat-message", "id", "message-field", "autocomplete", "off"], ["loc", [null, [31, 8], [35, 50]]], 0, 0], ["block", "link-to", ["index"], ["class", "active"], 1, null, ["loc", [null, [44, 6], [44, 79]]]], ["block", "link-to", ["settings"], [], 2, null, ["loc", [null, [44, 125], [44, 184]]]], ["block", "each", [["get", "channel.userList", ["loc", [null, [49, 14], [49, 30]]], 0, 0, 0, 0]], [], 3, null, ["loc", [null, [49, 6], [51, 15]]]]],
      locals: [],
      templates: [child0, child1, child2, child3]
    };
  })());
});
define('hyperchannel/components/channel-input-field/component', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].TextField.extend({

    keyUp: function keyUp(ev) {
      // console.debug('keyUp', ev);

      if (ev.altKey) {
        switch (ev.key) {
          case 'k':
            this._insertAtCaret('\u0003');
            break;
        }
      }
    },

    _insertAtCaret: function _insertAtCaret(myValue) {
      var el = this.$().get(0);

      if (document.selection) {
        el.focus();
        el = document.selection.createRange();
        el.text = myValue;
        el.focus();
      } else if (el.selectionStart || el.selectionStart === '0') {
        var startPos = el.selectionStart;
        var endPos = el.selectionEnd;
        var scrollTop = el.scrollTop;
        el.value = el.value.substring(0, startPos) + myValue + el.value.substring(endPos, el.value.length);
        el.focus();
        el.selectionStart = startPos + myValue.length;
        el.selectionEnd = startPos + myValue.length;
        el.scrollTop = scrollTop;
      } else {
        el.value += myValue;
        el.focus();
      }
    }

  });
});
define('hyperchannel/components/channel-nav/component', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({

    tagName: 'ul'

  });
});
define("hyperchannel/components/channel-nav/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "revision": "Ember@2.8.3",
            "loc": {
              "source": null,
              "start": {
                "line": 3,
                "column": 8
              },
              "end": {
                "line": 3,
                "column": 48
              }
            },
            "moduleName": "hyperchannel/components/channel-nav/template.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
            dom.insertBoundary(fragment, 0);
            dom.insertBoundary(fragment, null);
            return morphs;
          },
          statements: [["content", "space.name", ["loc", [null, [3, 34], [3, 48]]], 0, 0, 0, 0]],
          locals: [],
          templates: []
        };
      })();
      var child1 = (function () {
        var child0 = (function () {
          var child0 = (function () {
            return {
              meta: {
                "revision": "Ember@2.8.3",
                "loc": {
                  "source": null,
                  "start": {
                    "line": 8,
                    "column": 10
                  },
                  "end": {
                    "line": 8,
                    "column": 72
                  }
                },
                "moduleName": "hyperchannel/components/channel-nav/template.hbs"
              },
              isEmpty: false,
              arity: 0,
              cachedFragment: null,
              hasRendered: false,
              buildFragment: function buildFragment(dom) {
                var el0 = dom.createDocumentFragment();
                var el1 = dom.createComment("");
                dom.appendChild(el0, el1);
                return el0;
              },
              buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
                var morphs = new Array(1);
                morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
                dom.insertBoundary(fragment, 0);
                dom.insertBoundary(fragment, null);
                return morphs;
              },
              statements: [["content", "channel.name", ["loc", [null, [8, 56], [8, 72]]], 0, 0, 0, 0]],
              locals: [],
              templates: []
            };
          })();
          return {
            meta: {
              "revision": "Ember@2.8.3",
              "loc": {
                "source": null,
                "start": {
                  "line": 7,
                  "column": 8
                },
                "end": {
                  "line": 9,
                  "column": 8
                }
              },
              "moduleName": "hyperchannel/components/channel-nav/template.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("          ");
              dom.appendChild(el0, el1);
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(1);
              morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
              return morphs;
            },
            statements: [["block", "link-to", ["space.userChannel", ["get", "space", ["loc", [null, [8, 41], [8, 46]]], 0, 0, 0, 0], ["get", "channel", ["loc", [null, [8, 47], [8, 54]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [8, 10], [8, 84]]]]],
            locals: [],
            templates: [child0]
          };
        })();
        var child1 = (function () {
          var child0 = (function () {
            return {
              meta: {
                "revision": "Ember@2.8.3",
                "loc": {
                  "source": null,
                  "start": {
                    "line": 10,
                    "column": 10
                  },
                  "end": {
                    "line": 10,
                    "column": 68
                  }
                },
                "moduleName": "hyperchannel/components/channel-nav/template.hbs"
              },
              isEmpty: false,
              arity: 0,
              cachedFragment: null,
              hasRendered: false,
              buildFragment: function buildFragment(dom) {
                var el0 = dom.createDocumentFragment();
                var el1 = dom.createComment("");
                dom.appendChild(el0, el1);
                return el0;
              },
              buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
                var morphs = new Array(1);
                morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
                dom.insertBoundary(fragment, 0);
                dom.insertBoundary(fragment, null);
                return morphs;
              },
              statements: [["content", "channel.name", ["loc", [null, [10, 52], [10, 68]]], 0, 0, 0, 0]],
              locals: [],
              templates: []
            };
          })();
          return {
            meta: {
              "revision": "Ember@2.8.3",
              "loc": {
                "source": null,
                "start": {
                  "line": 9,
                  "column": 8
                },
                "end": {
                  "line": 11,
                  "column": 8
                }
              },
              "moduleName": "hyperchannel/components/channel-nav/template.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("          ");
              dom.appendChild(el0, el1);
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(1);
              morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
              return morphs;
            },
            statements: [["block", "link-to", ["space.channel", ["get", "space", ["loc", [null, [10, 37], [10, 42]]], 0, 0, 0, 0], ["get", "channel", ["loc", [null, [10, 43], [10, 50]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [10, 10], [10, 80]]]]],
            locals: [],
            templates: [child0]
          };
        })();
        return {
          meta: {
            "revision": "Ember@2.8.3",
            "loc": {
              "source": null,
              "start": {
                "line": 5,
                "column": 4
              },
              "end": {
                "line": 13,
                "column": 4
              }
            },
            "moduleName": "hyperchannel/components/channel-nav/template.hbs"
          },
          isEmpty: false,
          arity: 1,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("      ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("li");
            var el2 = dom.createTextNode("\n");
            dom.appendChild(el1, el2);
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("      ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element0 = dom.childAt(fragment, [1]);
            var morphs = new Array(2);
            morphs[0] = dom.createAttrMorph(element0, 'class');
            morphs[1] = dom.createMorphAt(element0, 1, 1);
            return morphs;
          },
          statements: [["attribute", "class", ["concat", [["subexpr", "if", [["get", "channel.connected", ["loc", [null, [6, 22], [6, 39]]], 0, 0, 0, 0], "connected", "disconnected"], [], ["loc", [null, [6, 17], [6, 68]]], 0, 0], " ", ["get", "channel.unreadMessagesClass", ["loc", [null, [6, 71], [6, 98]]], 0, 0, 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["block", "if", [["get", "channel.isUserChannel", ["loc", [null, [7, 14], [7, 35]]], 0, 0, 0, 0]], [], 0, 1, ["loc", [null, [7, 8], [11, 15]]]]],
          locals: ["channel"],
          templates: [child0, child1]
        };
      })();
      return {
        meta: {
          "revision": "Ember@2.8.3",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 16,
              "column": 0
            }
          },
          "moduleName": "hyperchannel/components/channel-nav/template.hbs"
        },
        isEmpty: false,
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("li");
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("h2");
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("ul");
          var el3 = dom.createTextNode("\n");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("    ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n  ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element1 = dom.childAt(fragment, [1]);
          var morphs = new Array(2);
          morphs[0] = dom.createMorphAt(dom.childAt(element1, [1]), 0, 0);
          morphs[1] = dom.createMorphAt(dom.childAt(element1, [3]), 1, 1);
          return morphs;
        },
        statements: [["block", "link-to", ["space", ["get", "space", ["loc", [null, [3, 27], [3, 32]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [3, 8], [3, 60]]]], ["block", "each", [["get", "space.sortedChannels", ["loc", [null, [5, 12], [5, 32]]], 0, 0, 0, 0]], [], 1, null, ["loc", [null, [5, 4], [13, 13]]]]],
        locals: ["space"],
        templates: [child0, child1]
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.8.3",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 17,
            "column": 0
          }
        },
        "moduleName": "hyperchannel/components/channel-nav/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["block", "each", [["get", "spaces", ["loc", [null, [1, 8], [1, 14]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [1, 0], [16, 9]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define('hyperchannel/components/message-chat-me/component', ['exports', 'hyperchannel/components/message-chat/component'], function (exports, _hyperchannelComponentsMessageChatComponent) {
  exports['default'] = _hyperchannelComponentsMessageChatComponent['default'].extend({
    classNames: ['chat-message', 'chat-me-message']
  });
});
define("hyperchannel/components/message-chat-me/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.8.3",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 4,
            "column": 0
          }
        },
        "moduleName": "hyperchannel/components/message-chat-me/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("span");
        dom.setAttribute(el1, "class", "username");
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("span");
        dom.setAttribute(el1, "class", "message");
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0]);
        var morphs = new Array(3);
        morphs[0] = dom.createAttrMorph(element0, 'data-username');
        morphs[1] = dom.createMorphAt(element0, 0, 0);
        morphs[2] = dom.createMorphAt(dom.childAt(fragment, [2]), 0, 0);
        return morphs;
      },
      statements: [["attribute", "data-username", ["get", "message.nickname", ["loc", [null, [1, 39], [1, 55]]], 0, 0, 0, 0], 0, 0, 0, 0], ["content", "message.nickname", ["loc", [null, [1, 58], [1, 78]]], 0, 0, 0, 0], ["content", "formattedContent", ["loc", [null, [2, 22], [2, 42]]], 0, 0, 0, 0]],
      locals: [],
      templates: []
    };
  })());
});
define('hyperchannel/components/message-chat/component', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({

    tagName: 'div',
    classNames: ['chat-message'],

    formattedContent: (function () {
      var content = this.get('message.content');

      var out = linkifyStr(content, {
        linkAttributes: { rel: 'nofollow' },
        validate: {
          url: function url(value) {
            return (/^(http)s?:\/\//.test(value)
            );
          }
        }
      });

      out = out.replace(/\u0003(\d+)/g, '<span class="color-$1">').replace(/\"color-(\d)\"/g, '"color-0$1"').replace(/\u000f/, '</span>');

      return _ember['default'].String.htmlSafe(out);
    }).property('message.content')

  });
});
define("hyperchannel/components/message-chat/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.8.3",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 3,
            "column": 0
          }
        },
        "moduleName": "hyperchannel/components/message-chat/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("span");
        dom.setAttribute(el1, "class", "username");
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("span");
        dom.setAttribute(el1, "class", "message");
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0]);
        var morphs = new Array(3);
        morphs[0] = dom.createAttrMorph(element0, 'data-username');
        morphs[1] = dom.createMorphAt(element0, 0, 0);
        morphs[2] = dom.createMorphAt(dom.childAt(fragment, [2]), 0, 0);
        return morphs;
      },
      statements: [["attribute", "data-username", ["get", "message.nickname", ["loc", [null, [1, 39], [1, 55]]], 0, 0, 0, 0], 0, 0, 0, 0], ["content", "message.nickname", ["loc", [null, [1, 58], [1, 78]]], 0, 0, 0, 0], ["content", "formattedContent", ["loc", [null, [2, 22], [2, 42]]], 0, 0, 0, 0]],
      locals: [],
      templates: []
    };
  })());
});
define('hyperchannel/components/notification-topic-change/component', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({

    tagName: 'div',
    classNames: ['topic-change-notification']

  });
});
define("hyperchannel/components/notification-topic-change/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.8.3",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "hyperchannel/components/notification-topic-change/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("Topic was changed to \"");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\" by ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("span");
        dom.setAttribute(el1, "class", "username");
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [3]);
        var morphs = new Array(3);
        morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
        morphs[1] = dom.createAttrMorph(element0, 'data-username');
        morphs[2] = dom.createMorphAt(element0, 0, 0);
        return morphs;
      },
      statements: [["content", "message.content", ["loc", [null, [1, 22], [1, 41]]], 0, 0, 0, 0], ["attribute", "data-username", ["get", "message.nickname", ["loc", [null, [1, 85], [1, 101]]], 0, 0, 0, 0], 0, 0, 0, 0], ["content", "message.nickname", ["loc", [null, [1, 104], [1, 124]]], 0, 0, 0, 0]],
      locals: [],
      templates: []
    };
  })());
});
define('hyperchannel/controllers/application', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller.extend({

    smt: _ember['default'].inject.service(),
    spaces: _ember['default'].computed.alias('smt.spaces'),

    showGlobalMenu: false,
    showChannelMenu: false

  });
});
define('hyperchannel/controllers/index', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller.extend({

    application: _ember['default'].inject.controller()

  });
});
define('hyperchannel/controllers/settings', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller.extend({

    application: _ember['default'].inject.controller(),
    ircSettings: _ember['default'].computed.alias('application.ircSettings')

  });
});
define('hyperchannel/controllers/space', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller.extend({});
});
define('hyperchannel/controllers/space/base_channel', ['exports', 'ember', 'hyperchannel/models/message'], function (exports, _ember, _hyperchannelModelsMessage) {
  exports['default'] = _ember['default'].Controller.extend({

    newMessage: null,
    space: _ember['default'].inject.controller(),
    smt: _ember['default'].inject.service(),

    actions: {
      sendMessage: function sendMessage(newMessage) {
        var message = _hyperchannelModelsMessage['default'].create({
          type: 'message-chat',
          date: new Date(),
          nickname: this.get('space.model.ircServer.nickname'),
          content: newMessage
        });

        this.get('smt').transferMessage(this.get('space.model'), this.get('model.sockethubChannelId'), message.get('content'));

        this.get('model.messages').pushObject(message);
        this.set('newMessage', null);
      },

      executeCommand: function executeCommand(newMessage) {
        var availableCommands = ["help", "join", "leave", "me", "msg", "part", "topic"];
        var commandText = newMessage.substr(1);
        var commandSplitted = commandText.split(" ");
        var command = commandSplitted[0];

        if (availableCommands.includes(command.toLowerCase())) {
          this.send(command + 'Command', commandSplitted.slice(1));
        } else {
          console.log('Unknown command', commandText);
        }

        this.set('newMessage', null);
      },

      joinCommand: function joinCommand(args) {
        var channel = this.get('smt').createChannel(this.get('space.model'), args[0]);
        this.transitionToRoute('space.channel', this.get('space.model'), channel);
      },

      partCommand: function partCommand() {
        var space = this.get('space.model');
        var channelName = this.get('model.name');
        this.get('smt').removeChannel(space, channelName);
        var lastChannel = space.get('channels.lastObject');
        this.transitionToRoute('space.channel', space, lastChannel);
      },

      leaveCommand: function leaveCommand() {
        this.send('partCommand');
      },

      helpCommand: function helpCommand() {},

      meCommand: function meCommand(args) {
        var newMessage = args.join(' ');

        var message = _hyperchannelModelsMessage['default'].create({
          type: 'message-chat-me',
          date: new Date(),
          nickname: this.get('space.model.ircServer.nickname'),
          content: newMessage
        });

        this.get('smt').transferMeMessage(this.get('space.model'), this.get('model.sockethubChannelId'), message.get('content'));

        this.get('model.messages').pushObject(message);
      },

      msgCommand: function msgCommand(args) {
        var username = args.shift();
        this.get('smt').createUserChannel(this.get('space.model'), username);
        // TODO fix this, sockethub sends a failure event with error
        // "TypeError: Cannot read property 'indexOf' of undefined"
        // this.get('smt').transferMessage(this.get('space.model'), username, args.join(' '));
      },

      topicCommand: function topicCommand(args) {
        var channel = this.get('model');
        var topic = args.join(' ');

        this.get('smt').changeTopic(this.get('space.model'), channel, topic);
      }
    }

  });
});
define('hyperchannel/controllers/space/channel', ['exports', 'hyperchannel/controllers/space/base_channel'], function (exports, _hyperchannelControllersSpaceBase_channel) {
  exports['default'] = _hyperchannelControllersSpaceBase_channel['default'].extend({});
});
define('hyperchannel/controllers/space/user_channel', ['exports', 'hyperchannel/controllers/space/base_channel'], function (exports, _hyperchannelControllersSpaceBase_channel) {
  exports['default'] = _hyperchannelControllersSpaceBase_channel['default'].extend({});
});
define('hyperchannel/ember-gestures/recognizers/pan', ['exports', 'ember-gestures/recognizers/pan'], function (exports, _emberGesturesRecognizersPan) {
  exports['default'] = _emberGesturesRecognizersPan['default'];
});
define('hyperchannel/ember-gestures/recognizers/pinch', ['exports', 'ember-gestures/recognizers/pinch'], function (exports, _emberGesturesRecognizersPinch) {
  exports['default'] = _emberGesturesRecognizersPinch['default'];
});
define('hyperchannel/ember-gestures/recognizers/press', ['exports', 'ember-gestures/recognizers/press'], function (exports, _emberGesturesRecognizersPress) {
  exports['default'] = _emberGesturesRecognizersPress['default'];
});
define('hyperchannel/ember-gestures/recognizers/rotate', ['exports', 'ember-gestures/recognizers/rotate'], function (exports, _emberGesturesRecognizersRotate) {
  exports['default'] = _emberGesturesRecognizersRotate['default'];
});
define('hyperchannel/ember-gestures/recognizers/swipe', ['exports', 'ember-gestures/recognizers/swipe'], function (exports, _emberGesturesRecognizersSwipe) {
  exports['default'] = _emberGesturesRecognizersSwipe['default'];
});
define('hyperchannel/ember-gestures/recognizers/swipeleft', ['exports'], function (exports) {
  /* global Hammer */
  exports['default'] = {
    include: [],
    exclude: [],
    options: { threshold: 25, direction: Hammer.DIRECTION_LEFT },
    eventName: 'swipeleft',
    recognizer: 'swipe'
  };
});
define('hyperchannel/ember-gestures/recognizers/swiperight', ['exports'], function (exports) {
  /* global Hammer */
  exports['default'] = {
    include: [],
    exclude: [],
    options: { threshold: 25, direction: Hammer.DIRECTION_RIGHT },
    eventName: 'swiperight',
    recognizer: 'swipe'
  };
});
define('hyperchannel/ember-gestures/recognizers/tap', ['exports', 'ember-gestures/recognizers/tap'], function (exports, _emberGesturesRecognizersTap) {
  // tap is not configured for double-tap, export single-tap
  //   if using double-tap
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberGesturesRecognizersTap['default'];
    }
  });
});
define('hyperchannel/ember-gestures/recognizers/vertical-pan', ['exports', 'ember-gestures/recognizers/vertical-pan'], function (exports, _emberGesturesRecognizersVerticalPan) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberGesturesRecognizersVerticalPan['default'];
    }
  });
});
define('hyperchannel/ember-gestures/recognizers/vertical-swipe', ['exports', 'ember-gestures/recognizers/vertical-swipe'], function (exports, _emberGesturesRecognizersVerticalSwipe) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberGesturesRecognizersVerticalSwipe['default'];
    }
  });
});
define('hyperchannel/ember-hammertime/tests/modules/ember-hammertime/components/component.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint | modules/ember-hammertime/components/component.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-hammertime/components/component.js should pass jshint.');
  });
});
define('hyperchannel/ember-hammertime/tests/modules/ember-hammertime/components/link-component.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint | modules/ember-hammertime/components/link-component.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-hammertime/components/link-component.js should pass jshint.');
  });
});
define('hyperchannel/ember-hammertime/tests/modules/ember-hammertime/mixins/touch-action.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint | modules/ember-hammertime/mixins/touch-action.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-hammertime/mixins/touch-action.js should pass jshint.');
  });
});
define('hyperchannel/event_dispatcher', ['exports', 'ember', 'ember-gestures/event_dispatcher', 'hyperchannel/config/environment'], function (exports, _ember, _emberGesturesEvent_dispatcher, _hyperchannelConfigEnvironment) {

  var gestures = _ember['default'].merge({}, {
    emberUseCapture: false,
    removeTracking: false,
    useFastPaths: false
  });
  gestures = _ember['default'].merge(gestures, _hyperchannelConfigEnvironment['default'].gestures);

  exports['default'] = _emberGesturesEvent_dispatcher['default'].extend({
    useCapture: gestures.emberUseCapture,
    removeTracking: gestures.removeTracking,
    useFastPaths: gestures.useFastPaths
  });
});
define('hyperchannel/helpers/route-action', ['exports', 'ember-route-action-helper/helpers/route-action'], function (exports, _emberRouteActionHelperHelpersRouteAction) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberRouteActionHelperHelpersRouteAction['default'];
    }
  });
});
define('hyperchannel/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'hyperchannel/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _hyperchannelConfigEnvironment) {
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(_hyperchannelConfigEnvironment['default'].APP.name, _hyperchannelConfigEnvironment['default'].APP.version)
  };
});
define('hyperchannel/initializers/container-debug-adapter', ['exports', 'ember-resolver/container-debug-adapter'], function (exports, _emberResolverContainerDebugAdapter) {
  exports['default'] = {
    name: 'container-debug-adapter',

    initialize: function initialize() {
      var app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _emberResolverContainerDebugAdapter['default']);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('hyperchannel/initializers/ember-hammertime', ['exports', 'ember-hammertime/components/link-component', 'ember-hammertime/components/component'], function (exports, _emberHammertimeComponentsLinkComponent, _emberHammertimeComponentsComponent) {
  // jshint ignore:line

  exports['default'] = {

    name: 'ember-hammertime',

    initialize: function initialize() {}

  };
});
// activate touch action css
// jshint ignore:line
define('hyperchannel/initializers/export-application-global', ['exports', 'ember', 'hyperchannel/config/environment'], function (exports, _ember, _hyperchannelConfigEnvironment) {
  exports.initialize = initialize;

  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_hyperchannelConfigEnvironment['default'].exportApplicationGlobal !== false) {
      var theGlobal;
      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _hyperchannelConfigEnvironment['default'].exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = _ember['default'].String.classify(_hyperchannelConfigEnvironment['default'].modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  exports['default'] = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('hyperchannel/initializers/sockethub', ['exports', 'hyperchannel/config/environment'], function (exports, _hyperchannelConfigEnvironment) {

  // TODO move settings into config file
  var sockethub = new SockethubClient(io(_hyperchannelConfigEnvironment['default'].sockethubURL, { path: '/sockethub' }));

  exports['default'] = {
    name: 'sockethub',

    initialize: function initialize(app) {
      app.register('sockethub:client', sockethub, { instantiate: false, singleton: true });

      app.inject('controller', 'sockethub', 'sockethub:client');
      app.inject('route', 'sockethub', 'sockethub:client');
      app.inject('component', 'sockethub', 'sockethub:client');
      app.inject('service', 'sockethub', 'sockethub:client');
    }
  };
});
/* global SockethubClient */
/* global io */
define('hyperchannel/instance-initializers/ember-gestures', ['exports', 'ember-getowner-polyfill'], function (exports, _emberGetownerPolyfill) {
  exports['default'] = {
    name: 'ember-gestures',

    initialize: function initialize(instance) {
      if (typeof instance.lookup === "function") {
        instance.lookup('service:-gestures');
      } else {
        // This can be removed when we no-longer support ember 1.12 and 1.13
        (0, _emberGetownerPolyfill['default'])(instance).lookup('service:-gestures');
      }
    }

  };
});
define('hyperchannel/models/channel', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Object.extend({

    name: '',
    userList: null,
    messages: null,
    connected: false,
    sockethubChannelId: null,
    topic: null,
    unreadMessages: false,
    unreadMentions: false,
    visible: false, // Current/active channel

    slug: (function () {
      // This could be based on server type in the future. E.g. IRC would be
      // server URL, while Campfire would be another id.
      return this.get('name').replace(/#/g, '');
    }).property('name'),

    formattedTopic: (function () {
      if (this.get('topic') !== null) {
        var topic = linkifyStr(this.get('topic'), {
          defaultProtocol: 'https',
          linkAttributes: { rel: 'nofollow' }
        });
        return new _ember['default'].String.htmlSafe(topic);
      } else {
        return '';
      }
    }).property('topic'),

    unreadMessagesClass: (function () {
      if (this.get('visible') || !this.get('unreadMessages')) {
        return null;
      }
      return this.get('unreadMentions') ? 'unread-mentions' : 'unread-messages';
    }).property('visible', 'unreadMessages', 'unreadMentions')

  });
});
define('hyperchannel/models/message', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Object.extend({

    type: null,
    date: null,
    nickname: null,
    content: null

  });
});
define('hyperchannel/models/space', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Object.extend({

    name: '',
    ircServer: {
      hostname: 'irc.freenode.net',
      port: 6667,
      secure: false,
      username: null,
      password: null,
      nickname: null,
      nickServ: {
        password: null
      }
    },
    channels: null,
    users: null,

    id: (function () {
      // This could be based on server type in the future. E.g. IRC would be
      // server URL, while Campfire would be another id.
      return this.get('name').toLowerCase();
    }).property('name'),

    sockethubPersonId: (function () {
      return 'irc://' + this.get('ircServer.nickname') + '@' + this.get('ircServer.hostname');
    }).property('ircServer.hostname', 'ircServer.nickname'),

    channelSorting: ['name'],
    sortedChannels: _ember['default'].computed.sort('channels', 'channelSorting')

  });
});
define('hyperchannel/models/user_channel', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Object.extend({

    name: '',
    userList: null,
    messages: null,
    connected: false,
    sockethubChannelId: null,
    topic: null,
    isUserChannel: true,

    slug: (function () {
      // This could be based on server type in the future. E.g. IRC would be
      // server URL, while Campfire would be another id.
      return this.get('name').replace(/#/g, '');
    }).property('name')

  });
});
define('hyperchannel/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  exports['default'] = _emberResolver['default'];
});
define('hyperchannel/router', ['exports', 'ember', 'hyperchannel/config/environment'], function (exports, _ember, _hyperchannelConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _hyperchannelConfigEnvironment['default'].locationType,
    rootURL: _hyperchannelConfigEnvironment['default'].rootURL
  });

  Router.map(function () {
    this.route('space', { path: '/:id' }, function () {
      this.route('channel', { path: '/channel/:slug' });
      this.route('userChannel', { path: '/user/:slug' });
    });

    this.route('settings');
  });

  exports['default'] = Router;
});
define('hyperchannel/routes/application', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({

    smt: _ember['default'].inject.service(),

    model: function model() {
      this.get('smt').loadFixtures();
    },

    actions: {

      menu: function menu(which, what) {
        var menuProp = 'show' + which.capitalize() + 'Menu';

        switch (what) {
          case 'show':
            this.controller.set(menuProp, true);
            break;
          case 'hide':
            this.controller.set(menuProp, false);
            break;
          case 'toggle':
            this.controller.toggleProperty(menuProp);
            break;
        }
      }

    }

  });
});
define('hyperchannel/routes/settings', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({

    actions: {
      save: function save() {
        var settings = this.controller.get('ircSettings');
        window.localStorage.setItem('hyperchannel:irc_settings', JSON.stringify(settings));
        console.log('saved settings', settings);
        this.controllerFor('application').configureIRC();
      }
    }

  });
});
define('hyperchannel/routes/space', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({

    smt: _ember['default'].inject.service(),

    model: function model(params) {
      return this.get('smt').get('spaces').findBy('id', params.id);
    }

  });
});
define('hyperchannel/routes/space/base_channel', ['exports', 'ember'], function (exports, _ember) {

  function scrollToBottom() {
    _ember['default'].$('#channel-content').animate({
      scrollTop: _ember['default'].$('#channel-content ul').height()
    }, '500');
  }

  function focusMessageInput() {
    if (window.innerWidth > 900) {
      console.debug('innerWidth', window.innerWidth);
      _ember['default'].$('input#message-field').focus();
    } else {
      // Don't auto-focus on small screens
    }
  }

  exports['default'] = _ember['default'].Route.extend({

    smt: _ember['default'].inject.service(),

    model: function model(params) {
      var space = this.modelFor('space');
      var channel = space.get('channels').findBy('slug', params.slug);

      if (!channel) {
        channel = this.createChannelOrUserChannel(space, params.slug);
      }

      return channel;
    },

    setupController: function setupController(controller, model) {
      this._super(controller, model);

      _ember['default'].run.scheduleOnce('afterRender', function () {
        focusMessageInput();
        scrollToBottom();
      });
    },

    actions: {

      didTransition: function didTransition() {
        var _this = this;

        var space = this.modelFor('space');
        var channel = this.controller.get('model');

        // Mark channel as active/visible
        space.get('channels').setEach('visible', false);
        channel.set('visible', true);

        // Mark unread messages as read
        channel.set('unreadMessages', false);
        channel.set('unreadMentions', false);

        setTimeout(function () {
          return _this.send('menu', 'global', 'hide');
        }, 500);
      }

    }

  });
});
define('hyperchannel/routes/space/channel', ['exports', 'hyperchannel/routes/space/base_channel'], function (exports, _hyperchannelRoutesSpaceBase_channel) {
  exports['default'] = _hyperchannelRoutesSpaceBase_channel['default'].extend({

    createChannelOrUserChannel: function createChannelOrUserChannel(space, channelName) {
      return this.get('smt').createChannel(space, "#" + channelName);
    }

  });
});
define('hyperchannel/routes/space/user_channel', ['exports', 'hyperchannel/routes/space/base_channel'], function (exports, _hyperchannelRoutesSpaceBase_channel) {
  exports['default'] = _hyperchannelRoutesSpaceBase_channel['default'].extend({
    createChannelOrUserChannel: function createChannelOrUserChannel(space, channelName) {
      return this.get('smt').createUserChannel(space, channelName);
    }
  });
});
define('hyperchannel/services/-gestures', ['exports', 'ember', 'hyperchannel/config/environment', 'ember-gestures/services/-gestures'], function (exports, _ember, _hyperchannelConfigEnvironment, _emberGesturesServicesGestures) {

  var gestures = _ember['default'].merge({}, {
    useCapture: false
  });
  gestures = _ember['default'].merge(gestures, _hyperchannelConfigEnvironment['default'].gestures);

  exports['default'] = _emberGesturesServicesGestures['default'].extend({
    useCapture: gestures.useCapture
  });
});
define('hyperchannel/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _emberAjaxServicesAjax) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberAjaxServicesAjax['default'];
    }
  });
});
define('hyperchannel/services/smt', ['exports', 'ember', 'hyperchannel/models/space', 'hyperchannel/models/channel', 'hyperchannel/models/user_channel', 'hyperchannel/models/message'], function (exports, _ember, _hyperchannelModelsSpace, _hyperchannelModelsChannel, _hyperchannelModelsUser_channel, _hyperchannelModelsMessage) {
  // import User from 'hyperchannel/models/channel';

  exports['default'] = _ember['default'].Service.extend({

    spaces: null,
    // users:  null,

    loadFixtures: function loadFixtures() {
      this.setupListeners();
      this.instantiateSpaces();
      this.instantiateChannels();
    },

    instantiateSpaces: function instantiateSpaces() {
      var _this = this;

      this.set('spaces', []);

      var spaceFixtures = this.get('spaceFixtures');
      Object.keys(spaceFixtures).forEach(function (spaceName) {
        var space = _hyperchannelModelsSpace['default'].create({ name: spaceName, ircServer: spaceFixtures[spaceName].ircServer });
        _this.connectToIRCServer(space);
        _this.get('spaces').pushObject(space);
      });
    },

    connectToIRCServer: function connectToIRCServer(space) {
      this.sockethub.ActivityStreams.Object.create({
        '@id': space.get('sockethubPersonId'),
        '@type': "person",
        displayName: space.get('ircServer.nickname')
      });

      var credentials = {
        actor: space.get('sockethubPersonId'),
        context: 'irc',
        object: {
          '@type': 'credentials',
          nick: space.get('ircServer.nickname'),
          server: space.get('ircServer.hostname'),
          port: space.get('ircServer.port'),
          secure: space.get('ircServer.secure')
        }
      };

      _ember['default'].Logger.debug('connecting to irc', credentials);
      this.sockethub.socket.emit('credentials', credentials);
    },

    transferMessage: function transferMessage(space, target, content) {
      var job = {
        context: 'irc',
        '@type': 'send',
        actor: space.get('sockethubPersonId'),
        target: target,
        object: {
          '@type': 'message',
          content: content
        }
      };

      console.log('sending message job', job);
      this.sockethub.socket.emit('message', job);
    },

    transferMeMessage: function transferMeMessage(space, target, content) {
      var job = {
        context: 'irc',
        '@type': 'send',
        actor: space.get('sockethubPersonId'),
        target: target,
        object: {
          '@type': 'me',
          content: content
        }
      };

      console.log('sending message job', job);
      this.sockethub.socket.emit('message', job);
    },

    setupListeners: function setupListeners() {
      var _this2 = this;

      this.sockethub.socket.on('completed', function (message) {
        _ember['default'].Logger.debug('SH completed', message);

        switch (message['@type']) {
          case 'join':
            if (message['@type'] === 'join') {
              var space = _this2.get('spaces').findBy('sockethubPersonId', message.actor);
              if (!_ember['default'].isEmpty(space)) {
                var channel = space.get('channels').findBy('sockethubChannelId', message.target);
                if (!_ember['default'].isEmpty(channel)) {
                  channel.set('connected', true);
                  _this2.observeChannel(space.get('sockethubPersonId'), channel.get('sockethubChannelId'));
                }
              }
            }
            break;
          case 'observe':
            if (message.object['@type'] === 'attendance') {
              _this2.updateChannelUserList(message);
            }
            break;
        }
      });

      this.sockethub.socket.on('message', function (message) {
        _ember['default'].Logger.debug('SH message', message);

        switch (message['@type']) {
          case 'observe':
            if (message.object['@type'] === 'attendance') {
              _this2.updateChannelUserList(message);
            }
            break;
          case 'join':
            _this2.addUserToChannelUserList(message);
            break;
          case 'leave':
            _this2.removeUserFromChannelUserList(message);
            break;
          case 'send':
            switch (message.object['@type']) {
              case 'message':
              case 'me':
                _this2.addMessageToChannel(message);
                break;
            }
            break;
          case 'update':
            if (message.object['@type'] === 'topic') {
              _this2.updateChannelTopic(message);
            }
            break;
        }

        // user list for a channel
      });

      this.sockethub.socket.on('failure', function (message) {
        _ember['default'].Logger.error('SH failure', message);
      });
    },

    updateChannelUserList: function updateChannelUserList(message) {
      var channel = this.getChannelByMessage(message);
      if (channel) {
        channel.set('userList', message.object.members.sort());
      }
    },

    addUserToChannelUserList: function addUserToChannelUserList(message) {
      var channel = this.getChannelByMessage(message);
      if (channel) {
        var userList = channel.get('userList');
        userList.pushObject(message.actor.displayName);
      }
    },

    removeUserFromChannelUserList: function removeUserFromChannelUserList(message) {
      var channel = this.getChannelByMessage(message);
      if (channel) {
        var userList = channel.get('userList');
        userList.removeObject(message.actor.displayName);
      }
    },

    getChannelByMessage: function getChannelByMessage(message) {
      var addressWithHostname, hostname;
      if (typeof message.actor === 'object') {
        addressWithHostname = message.actor['@id'];
      } else if (typeof message.actor === 'string') {
        addressWithHostname = message.actor;
      }

      hostname = addressWithHostname.match(/irc:\/\/(?:.+@)?(.+?)(?:\/|$)/)[1];

      var space = this.get('spaces').findBy('ircServer.hostname', hostname);

      if (!_ember['default'].isEmpty(space)) {
        var channel = space.get('channels').findBy('sockethubChannelId', message.target['@id']);
        if (!_ember['default'].isEmpty(channel)) {
          return channel;
        }
      }
    },

    updateChannelTopic: function updateChannelTopic(message) {
      var hostname;
      if (typeof message.target === 'object') {
        hostname = message.target['@id'].match(/irc:\/\/(.+)\//)[1];
      } else if (typeof message.actor === 'string') {
        hostname = message.actor.match(/irc:\/\/.+\@(.+)/)[1];
      }

      var space = this.get('spaces').findBy('ircServer.hostname', hostname);

      if (!_ember['default'].isEmpty(space)) {
        var channel = space.get('channels').findBy('sockethubChannelId', message.target['@id']);

        if (_ember['default'].isEmpty(channel)) {
          channel = this.createChannel(space, message.target['@id']);
        }

        channel.set('topic', message.object.topic);

        // let notification = Message.create({
        //   type: 'notification-topic-change',
        //   date: new Date(message.published),
        //   nickname: message.actor.displayName,
        //   content: message.object.topic
        // });

        // channel.get('messages').pushObject(notification);

        // TODO only send when topic actually changed (and not after joining
        // channels)
        Notification.requestPermission(function () {
          new Notification(channel.name, {
            body: "New Topic: " + message.object.topic
          });
        });
      }
    },

    addMessageToChannel: function addMessageToChannel(message) {
      var space = this.get('spaces').findBy('ircServer.hostname', message.actor['@id'].match(/irc:\/\/.+\@(.+)/)[1]);
      var nickname = space.get('ircServer.nickname');

      var targetChannelName;
      if (nickname === message.target.displayName) {
        targetChannelName = message.actor.displayName;
      } else {
        targetChannelName = message.target.displayName;
      }

      var channel = space.get('channels').findBy('name', targetChannelName);
      if (!channel) {
        channel = this.createChannel(space, targetChannelName);
      }

      var messageType = undefined;
      if (message.object['@type'] === 'me') {
        messageType = 'message-chat-me';
      } else {
        messageType = 'message-chat';
      }

      var channelMessage = _hyperchannelModelsMessage['default'].create({
        type: messageType,
        date: new Date(message.published),
        nickname: message.actor.displayName,
        content: message.object.content
      });

      // TODO should check for message and update sent status if exists
      if (message.actor.displayName !== nickname) {
        channel.get('messages').pushObject(channelMessage);

        if (!channel.get('visible')) {
          channel.set('unreadMessages', true);
          if (message.object.content.match(nickname)) {
            channel.set('unreadMentions', true);
          }
        }
      }
    },

    observeChannel: function observeChannel(person, channelId) {
      var observeMsg = {
        context: 'irc',
        '@type': 'observe',
        actor: person,
        target: channelId,
        object: {
          '@type': 'attendance'
        }
      };

      _ember['default'].Logger.debug('asking for attendance list', observeMsg);
      this.sockethub.socket.emit('message', observeMsg);
    },

    instantiateChannels: function instantiateChannels() {
      var _this3 = this;

      this.get('spaces').forEach(function (space) {
        space.set('channels', []);

        _this3.get('spaceFixtures')[space.get('name')].channels.forEach(function (channelName) {
          _this3.createChannel(space, channelName);
        });
      });
    },

    createChannel: function createChannel(space, channelName) {
      var channel = _hyperchannelModelsChannel['default'].create({
        name: channelName,
        sockethubChannelId: 'irc://' + space.get('ircServer.hostname') + '/' + channelName,
        messages: []
      });
      this.joinChannel(space, channel, "room");
      channel.set('userList', []);
      space.get('channels').pushObject(channel);
      return channel;
    },

    createUserChannel: function createUserChannel(space, userName) {
      var channel = _hyperchannelModelsUser_channel['default'].create({
        name: userName,
        sockethubChannelId: 'irc://' + space.get('ircServer.hostname') + '/' + userName,
        messages: []
      });
      this.joinChannel(space, channel, "person");
      channel.set('userList', []);
      space.get('channels').pushObject(channel);
      return channel;
    },

    removeChannel: function removeChannel(space, channelName) {
      var channel = space.get('channels').findBy('name', channelName);
      this.leaveChannel(space, channel);
      space.get('channels').removeObject(channel);
      return channel;
    },

    joinChannel: function joinChannel(space, channel, type) {
      this.sockethub.ActivityStreams.Object.create({
        '@type': type,
        '@id': channel.get('sockethubChannelId'),
        displayName: channel.get('name')
      });

      var joinMsg = {
        context: 'irc',
        '@type': 'join',
        actor: space.get('sockethubPersonId'),
        target: channel.get('sockethubChannelId'),
        object: {}
      };

      _ember['default'].Logger.debug('joining channel', joinMsg);
      this.sockethub.socket.emit('message', joinMsg);
    },

    leaveChannel: function leaveChannel(space, channel) {
      this.sockethub.ActivityStreams.Object.create({
        '@type': "room",
        '@id': channel.get('sockethubChannelId'),
        displayName: channel.get('name')
      });

      var joinMsg = {
        context: 'irc',
        '@type': 'leave',
        actor: space.get('sockethubPersonId'),
        target: channel.get('sockethubChannelId'),
        object: {}
      };

      _ember['default'].Logger.debug('leaving channel', joinMsg);
      this.sockethub.socket.emit('message', joinMsg);
    },

    changeTopic: function changeTopic(space, channel, topic) {
      var topicMsg = {
        context: 'irc',
        '@type': 'update',
        actor: space.get('sockethubPersonId'),
        target: channel.get('sockethubChannelId'),
        object: {
          '@type': 'topic',
          topic: topic
        }
      };

      this.sockethub.socket.emit('message', topicMsg);
    },

    spaceFixtures: (function () {
      var nickname = localStorage.getItem('hyperchannel-nickname');
      if (!nickname) {
        nickname = prompt("Choose a Nickname");
        localStorage.setItem('hyperchannel-nickname', nickname);
      }

      return {
        'Freenode': {
          ircServer: {
            hostname: 'irc.freenode.net',
            port: 6667,
            secure: false,
            username: null,
            password: null,
            nickname: nickname,
            nickServ: {
              password: null
            }
          },
          channels: ['#67p', '#hackerbeach', '#kosmos', '#kosmos-dev', '#kosmos-random', '#sockethub']
        }
      };
    }). // 'Enterprise': {
    //   ircServer : {
    //     hostname: 'irc.kosmos.net',
    //     port: 6667,
    //     secure: false,
    //     username: null,
    //     password: null,
    //     nickname: 'kosmos-enterprise-dev',
    //     nickServ: {
    //       password: null
    //     }
    //   }
    // },
    property(),

    userFixtures: (function () {
      return [{ username: 'bkero' }, { username: 'derbumi' }, { username: 'galfert' }, { username: 'gregkare' }, { username: 'jaaan' }, { username: 'LSA232' }, { username: 'raucao' }, { username: 'slvrbckt' }];
    }).property()

  });
});
define("hyperchannel/templates/application", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@2.8.3",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 16,
              "column": 0
            }
          },
          "moduleName": "hyperchannel/templates/application.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "id", "global");
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("header");
          dom.setAttribute(el2, "id", "sitename");
          var el3 = dom.createTextNode("\n      ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("h1");
          var el4 = dom.createTextNode("Kosmos");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n    ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2, "class", "main");
          var el3 = dom.createTextNode("\n      ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("nav");
          dom.setAttribute(el3, "id", "channels");
          var el4 = dom.createTextNode("\n        ");
          dom.appendChild(el3, el4);
          var el4 = dom.createComment("");
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n      ");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n    ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n  ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n\n  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(2);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1, 3, 1]), 1, 1);
          morphs[1] = dom.createMorphAt(fragment, 3, 3, contextualElement);
          return morphs;
        },
        statements: [["inline", "channel-nav", [], ["spaces", ["subexpr", "@mut", [["get", "spaces", ["loc", [null, [10, 29], [10, 35]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [10, 8], [10, 37]]], 0, 0], ["content", "outlet", ["loc", [null, [15, 2], [15, 12]]], 0, 0, 0, 0]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.8.3",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 17,
            "column": 0
          }
        },
        "moduleName": "hyperchannel/templates/application.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["block", "app-container", [], ["showGlobalMenu", ["subexpr", "@mut", [["get", "showGlobalMenu", ["loc", [null, [1, 32], [1, 46]]], 0, 0, 0, 0]], [], [], 0, 0], "showChannelMenu", ["subexpr", "@mut", [["get", "showChannelMenu", ["loc", [null, [2, 33], [2, 48]]], 0, 0, 0, 0]], [], [], 0, 0]], 0, null, ["loc", [null, [1, 0], [16, 18]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("hyperchannel/templates/index", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.8.3",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "hyperchannel/templates/index.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("[index.hbs]");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes() {
        return [];
      },
      statements: [],
      locals: [],
      templates: []
    };
  })());
});
define("hyperchannel/templates/settings", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.8.3",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 18,
            "column": 0
          }
        },
        "moduleName": "hyperchannel/templates/settings.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("section");
        dom.setAttribute(el1, "id", "channel-content");
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("ul");
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("li");
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n  ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("li");
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n  ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("li");
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n  ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("li");
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("button");
        dom.setAttribute(el4, "style", "touch-action: manipulation; -ms-touch-action: manipulation;");
        var el5 = dom.createTextNode("Save");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n  ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0, 1]);
        var element1 = dom.childAt(element0, [7, 1]);
        var morphs = new Array(4);
        morphs[0] = dom.createMorphAt(dom.childAt(element0, [1]), 1, 1);
        morphs[1] = dom.createMorphAt(dom.childAt(element0, [3]), 1, 1);
        morphs[2] = dom.createMorphAt(dom.childAt(element0, [5]), 1, 1);
        morphs[3] = dom.createElementMorph(element1);
        return morphs;
      },
      statements: [["inline", "input", [], ["value", ["subexpr", "@mut", [["get", "ircSettings.nickname", ["loc", [null, [4, 18], [4, 38]]], 0, 0, 0, 0]], [], [], 0, 0], "placeholder", "nickname"], ["loc", [null, [4, 4], [4, 63]]], 0, 0], ["inline", "input", [], ["value", ["subexpr", "@mut", [["get", "ircSettings.server", ["loc", [null, [7, 18], [7, 36]]], 0, 0, 0, 0]], [], [], 0, 0], "placeholder", "irc.servername.org"], ["loc", [null, [7, 4], [7, 71]]], 0, 0], ["inline", "input", [], ["value", ["subexpr", "@mut", [["get", "ircSettings.channel", ["loc", [null, [10, 18], [10, 37]]], 0, 0, 0, 0]], [], [], 0, 0], "placeholder", "#channel"], ["loc", [null, [10, 4], [10, 62]]], 0, 0], ["element", "action", ["save"], [], ["loc", [null, [13, 12], [13, 29]]], 0, 0]],
      locals: [],
      templates: []
    };
  })());
});
define("hyperchannel/templates/space/channel", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.8.3",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 6,
            "column": 0
          }
        },
        "moduleName": "hyperchannel/templates/space/channel.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["inline", "channel-container", [], ["channel", ["subexpr", "@mut", [["get", "model", ["loc", [null, [1, 28], [1, 33]]], 0, 0, 0, 0]], [], [], 0, 0], "newMessage", ["subexpr", "@mut", [["get", "newMessage", ["loc", [null, [2, 31], [2, 41]]], 0, 0, 0, 0]], [], [], 0, 0], "onMessage", ["subexpr", "action", ["sendMessage"], [], ["loc", [null, [3, 30], [3, 52]]], 0, 0], "onCommand", ["subexpr", "action", ["executeCommand"], [], ["loc", [null, [4, 30], [4, 55]]], 0, 0], "menu", ["subexpr", "route-action", ["menu"], [], ["loc", [null, [5, 25], [5, 46]]], 0, 0]], ["loc", [null, [1, 0], [5, 48]]], 0, 0]],
      locals: [],
      templates: []
    };
  })());
});
define("hyperchannel/templates/space/user_channel", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.8.3",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 5,
            "column": 0
          }
        },
        "moduleName": "hyperchannel/templates/space/user_channel.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["inline", "channel-container", [], ["channel", ["subexpr", "@mut", [["get", "model", ["loc", [null, [1, 28], [1, 33]]], 0, 0, 0, 0]], [], [], 0, 0], "newMessage", ["subexpr", "@mut", [["get", "newMessage", ["loc", [null, [2, 31], [2, 41]]], 0, 0, 0, 0]], [], [], 0, 0], "onMessage", ["subexpr", "action", ["sendMessage"], [], ["loc", [null, [3, 30], [3, 52]]], 0, 0], "onCommand", ["subexpr", "action", ["executeCommand"], [], ["loc", [null, [4, 30], [4, 55]]], 0, 0]], ["loc", [null, [1, 0], [4, 57]]], 0, 0]],
      locals: [],
      templates: []
    };
  })());
});
/* jshint ignore:start */



/* jshint ignore:end */

/* jshint ignore:start */

define('hyperchannel/config/environment', ['ember'], function(Ember) {
  var prefix = 'hyperchannel';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */

});

/* jshint ignore:end */

/* jshint ignore:start */

if (!runningTests) {
  require("hyperchannel/app")["default"].create({"name":"hyperchannel","version":"0.1.0+67eb55b1"});
}

/* jshint ignore:end */
//# sourceMappingURL=hyperchannel.map
