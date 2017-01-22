'use strict';

define('hyperchannel/tests/app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass jshint.');
  });
});
define('hyperchannel/tests/components/app-container/component.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | components/app-container/component.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/app-container/component.js should pass jshint.');
  });
});
define('hyperchannel/tests/components/channel-container/component.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | components/channel-container/component.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/channel-container/component.js should pass jshint.');
  });
});
define('hyperchannel/tests/components/channel-input-field/component.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | components/channel-input-field/component.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/channel-input-field/component.js should pass jshint.');
  });
});
define('hyperchannel/tests/components/channel-nav/component.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | components/channel-nav/component.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/channel-nav/component.js should pass jshint.');
  });
});
define('hyperchannel/tests/components/message-chat-me/component.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | components/message-chat-me/component.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/message-chat-me/component.js should pass jshint.');
  });
});
define('hyperchannel/tests/components/message-chat/component.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | components/message-chat/component.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/message-chat/component.js should pass jshint.');
  });
});
define('hyperchannel/tests/components/notification-topic-change/component.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | components/notification-topic-change/component.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/notification-topic-change/component.js should pass jshint.');
  });
});
define('hyperchannel/tests/controllers/application.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | controllers/application.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/application.js should pass jshint.');
  });
});
define('hyperchannel/tests/controllers/index.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | controllers/index.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/index.js should pass jshint.');
  });
});
define('hyperchannel/tests/controllers/settings.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | controllers/settings.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/settings.js should pass jshint.');
  });
});
define('hyperchannel/tests/controllers/space.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | controllers/space.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/space.js should pass jshint.');
  });
});
define('hyperchannel/tests/controllers/space/base_channel.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | controllers/space/base_channel.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/space/base_channel.js should pass jshint.');
  });
});
define('hyperchannel/tests/controllers/space/channel.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | controllers/space/channel.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/space/channel.js should pass jshint.');
  });
});
define('hyperchannel/tests/controllers/space/user_channel.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | controllers/space/user_channel.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/space/user_channel.js should pass jshint.');
  });
});
define('hyperchannel/tests/ember-gestures/recognizers/swipeleft.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | ember-gestures/recognizers/swipeleft.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ember-gestures/recognizers/swipeleft.js should pass jshint.');
  });
});
define('hyperchannel/tests/ember-gestures/recognizers/swiperight.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | ember-gestures/recognizers/swiperight.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ember-gestures/recognizers/swiperight.js should pass jshint.');
  });
});
define('hyperchannel/tests/helpers/destroy-app', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = destroyApp;

  function destroyApp(application) {
    _ember['default'].run(application, 'destroy');
  }
});
define('hyperchannel/tests/helpers/destroy-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/destroy-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass jshint.');
  });
});
define('hyperchannel/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'ember', 'hyperchannel/tests/helpers/start-app', 'hyperchannel/tests/helpers/destroy-app'], function (exports, _qunit, _ember, _hyperchannelTestsHelpersStartApp, _hyperchannelTestsHelpersDestroyApp) {
  var Promise = _ember['default'].RSVP.Promise;

  exports['default'] = function (name) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _hyperchannelTestsHelpersStartApp['default'])();

        if (options.beforeEach) {
          return options.beforeEach.apply(this, arguments);
        }
      },

      afterEach: function afterEach() {
        var _this = this;

        var afterEach = options.afterEach && options.afterEach.apply(this, arguments);
        return Promise.resolve(afterEach).then(function () {
          return (0, _hyperchannelTestsHelpersDestroyApp['default'])(_this.application);
        });
      }
    });
  };
});
define('hyperchannel/tests/helpers/module-for-acceptance.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/module-for-acceptance.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass jshint.');
  });
});
define('hyperchannel/tests/helpers/resolver', ['exports', 'hyperchannel/resolver', 'hyperchannel/config/environment'], function (exports, _hyperchannelResolver, _hyperchannelConfigEnvironment) {

  var resolver = _hyperchannelResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _hyperchannelConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _hyperchannelConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});
define('hyperchannel/tests/helpers/resolver.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/resolver.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass jshint.');
  });
});
define('hyperchannel/tests/helpers/start-app', ['exports', 'ember', 'hyperchannel/app', 'hyperchannel/config/environment'], function (exports, _ember, _hyperchannelApp, _hyperchannelConfigEnvironment) {
  exports['default'] = startApp;

  function startApp(attrs) {
    var application = undefined;

    var attributes = _ember['default'].merge({}, _hyperchannelConfigEnvironment['default'].APP);
    attributes = _ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    _ember['default'].run(function () {
      application = _hyperchannelApp['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }
});
define('hyperchannel/tests/helpers/start-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/start-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass jshint.');
  });
});
define('hyperchannel/tests/initializers/sockethub.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | initializers/sockethub.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'initializers/sockethub.js should pass jshint.');
  });
});
define('hyperchannel/tests/integration/components/app-container-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('app-container', 'Integration | Component | app container', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template((function () {
      return {
        meta: {
          'revision': 'Ember@2.8.3',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 1,
              'column': 17
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
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
        statements: [['content', 'app-container', ['loc', [null, [1, 0], [1, 17]]], 0, 0, 0, 0]],
        locals: [],
        templates: []
      };
    })()));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template((function () {
      var child0 = (function () {
        return {
          meta: {
            'revision': 'Ember@2.8.3',
            'loc': {
              'source': null,
              'start': {
                'line': 2,
                'column': 4
              },
              'end': {
                'line': 4,
                'column': 4
              }
            }
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode('      template block text\n');
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

      return {
        meta: {
          'revision': 'Ember@2.8.3',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 5,
              'column': 2
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode('\n');
          dom.appendChild(el0, el1);
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode('  ');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [['block', 'app-container', [], [], 0, null, ['loc', [null, [2, 4], [4, 22]]]]],
        locals: [],
        templates: [child0]
      };
    })()));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('hyperchannel/tests/integration/components/app-container-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | integration/components/app-container-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/app-container-test.js should pass jshint.');
  });
});
define('hyperchannel/tests/integration/components/channel-container/component-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('channel-container', 'Integration | Component | channel container', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template((function () {
      return {
        meta: {
          'revision': 'Ember@2.8.3',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 1,
              'column': 21
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
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
        statements: [['content', 'channel-container', ['loc', [null, [1, 0], [1, 21]]], 0, 0, 0, 0]],
        locals: [],
        templates: []
      };
    })()));

    assert.equal(this.$().text().trim(), '');
  });
});
define('hyperchannel/tests/integration/components/channel-container/component-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | integration/components/channel-container/component-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/channel-container/component-test.js should pass jshint.');
  });
});
define('hyperchannel/tests/models/channel.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | models/channel.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/channel.js should pass jshint.');
  });
});
define('hyperchannel/tests/models/message.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | models/message.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/message.js should pass jshint.');
  });
});
define('hyperchannel/tests/models/space.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | models/space.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/space.js should pass jshint.');
  });
});
define('hyperchannel/tests/models/user_channel.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | models/user_channel.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/user_channel.js should pass jshint.');
  });
});
define('hyperchannel/tests/resolver.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | resolver.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass jshint.');
  });
});
define('hyperchannel/tests/router.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | router.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass jshint.');
  });
});
define('hyperchannel/tests/routes/application.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/application.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/application.js should pass jshint.');
  });
});
define('hyperchannel/tests/routes/settings.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/settings.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/settings.js should pass jshint.');
  });
});
define('hyperchannel/tests/routes/space.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/space.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/space.js should pass jshint.');
  });
});
define('hyperchannel/tests/routes/space/base_channel.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/space/base_channel.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/space/base_channel.js should pass jshint.');
  });
});
define('hyperchannel/tests/routes/space/channel.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/space/channel.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/space/channel.js should pass jshint.');
  });
});
define('hyperchannel/tests/routes/space/user_channel.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/space/user_channel.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/space/user_channel.js should pass jshint.');
  });
});
define('hyperchannel/tests/services/smt.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | services/smt.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'services/smt.js should pass jshint.');
  });
});
define('hyperchannel/tests/test-helper', ['exports', 'hyperchannel/tests/helpers/resolver', 'ember-qunit'], function (exports, _hyperchannelTestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_hyperchannelTestsHelpersResolver['default']);
});
define('hyperchannel/tests/test-helper.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | test-helper.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass jshint.');
  });
});
define('hyperchannel/tests/unit/components/channel-input-field-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('channel-input-field', {
    // Specify the other units that are required for this test
    // needs: ['component:foo', 'helper:bar']
    unit: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    assert.expect(2);

    // Creates the component instance
    var component = this.subject();
    assert.equal(component._state, 'preRender');

    // Renders the component to the page
    this.render();
    assert.equal(component._state, 'inDOM');
  });
});
define('hyperchannel/tests/unit/components/channel-input-field-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/components/channel-input-field-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/components/channel-input-field-test.js should pass jshint.');
  });
});
define('hyperchannel/tests/unit/components/channel-nav-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('channel-nav', {
    // Specify the other units that are required for this test
    // needs: ['component:foo', 'helper:bar']
    unit: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    assert.expect(2);

    // Creates the component instance
    var component = this.subject();
    assert.equal(component._state, 'preRender');

    // Renders the component to the page
    this.render();
    assert.equal(component._state, 'inDOM');
  });
});
define('hyperchannel/tests/unit/components/channel-nav-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/components/channel-nav-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/components/channel-nav-test.js should pass jshint.');
  });
});
define('hyperchannel/tests/unit/components/message-chat-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('message-chat', 'Unit | Component | message-chat', {
    unit: true
  });

  (0, _emberQunit.test)('#formattedContent turns full URLs into links', function (assert) {
    var component = this.subject({
      message: { content: 'visit https://kosmos.org for more info' }
    });

    assert.equal(component.get('formattedContent').toString(), 'visit <a href="https://kosmos.org" class="linkified" target="_blank" rel="nofollow">https://kosmos.org</a> for more info');
  });

  (0, _emberQunit.test)('#formattedContent does not turn domain names into links', function (assert) {
    var component = this.subject({
      message: { content: 'visit kosmos.org for more info' }
    });

    assert.equal(component.get('formattedContent').toString(), 'visit kosmos.org for more info');
  });

  (0, _emberQunit.test)('#formattedContent escapes HTML', function (assert) {
    var component = this.subject({
      message: { content: 'never gonna <marquee>give you up</marquee>' }
    });

    assert.equal(component.get('formattedContent').toString(), 'never gonna &lt;marquee&gt;give you up&lt;/marquee&gt;');
  });

  (0, _emberQunit.test)('#formattedContent converts color codes', function (assert) {
    var component = this.subject({
      message: { content: 'put some \u000313color\u000f into your life' }
    });

    assert.equal(component.get('formattedContent').toString(), 'put some <span class="color-13">color</span> into your life');
  });
});
define('hyperchannel/tests/unit/components/message-chat-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/components/message-chat-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/components/message-chat-test.js should pass jshint.');
  });
});
define('hyperchannel/tests/unit/models/channel-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('model:channel', 'Unit | Model | channel');

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    assert.ok(!!model);
  });

  (0, _emberQunit.test)('#slug', function (assert) {
    var model = this.subject();
    model.set('name', '#kosmos-dev');

    assert.ok(model.get('slug') === 'kosmos-dev');
  });

  //
  // formattedTopic
  //

  (0, _emberQunit.test)('#formattedTopic turns URLs into links', function (assert) {
    var channel = this.subject();
    channel.set('topic', 'visit kosmos.org for more info');

    assert.equal(channel.get('formattedTopic').toString(), 'visit <a href="https://kosmos.org" class="linkified" target="_blank" rel="nofollow">kosmos.org</a> for more info');
  });

  (0, _emberQunit.test)('#formattedTopic escapes HTML', function (assert) {
    var channel = this.subject();
    channel.set('topic', 'never gonna <marquee>give you up</marquee>');

    assert.equal(channel.get('formattedTopic').toString(), 'never gonna &lt;marquee&gt;give you up&lt;/marquee&gt;');
  });

  //
  // unreadMessagesClass
  //

  (0, _emberQunit.test)('#unreadMessagesClass is null when channel is visible', function (assert) {
    var channel = this.subject();
    channel.set('unreadMessages', true);
    channel.set('visible', true);

    assert.equal(channel.get('unreadMessagesClass'), null);
  });

  (0, _emberQunit.test)('#unreadMessagesClass is null when channel has no unread messages', function (assert) {
    var channel = this.subject();
    channel.set('unreadMessages', false);
    channel.set('visible', false);

    assert.equal(channel.get('unreadMessagesClass'), null);
  });

  (0, _emberQunit.test)('#unreadMessagesClass is correct for unread messages', function (assert) {
    var channel = this.subject();
    channel.set('unreadMessages', true);
    channel.set('unreadMentions', false);
    channel.set('visible', false);

    assert.equal(channel.get('unreadMessagesClass'), 'unread-messages');
  });

  (0, _emberQunit.test)('#unreadMessagesClass is correct for unread mentions', function (assert) {
    var channel = this.subject();
    channel.set('unreadMessages', true);
    channel.set('unreadMentions', true);
    channel.set('visible', false);

    assert.equal(channel.get('unreadMessagesClass'), 'unread-mentions');
  });
});
define('hyperchannel/tests/unit/models/channel-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/models/channel-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/channel-test.js should pass jshint.');
  });
});
define('hyperchannel/tests/unit/models/space-test', ['exports', 'ember-qunit', 'hyperchannel/models/channel'], function (exports, _emberQunit, _hyperchannelModelsChannel) {

  (0, _emberQunit.moduleFor)('model:space', 'Unit | Model | space');

  (0, _emberQunit.test)('#sortedChannels returns channels sorted by name', function (assert) {
    var space = this.subject();

    space.set('channels', [_hyperchannelModelsChannel['default'].create({ name: 'dominica' }), _hyperchannelModelsChannel['default'].create({ name: 'phu quoc' }), _hyperchannelModelsChannel['default'].create({ name: 'lamu' }), _hyperchannelModelsChannel['default'].create({ name: 'canoa' }), _hyperchannelModelsChannel['default'].create({ name: 'flores' })]);

    var sortedChannels = space.get('sortedChannels');
    assert.deepEqual(sortedChannels.mapBy('name'), ['canoa', 'dominica', 'flores', 'lamu', 'phu quoc']);
  });
});
define('hyperchannel/tests/unit/models/space-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/models/space-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/space-test.js should pass jshint.');
  });
});
/* jshint ignore:start */

require('hyperchannel/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;

/* jshint ignore:end */
//# sourceMappingURL=tests.map
