define('ember-hammertime/components/component', ['exports', 'ember', 'ember-hammertime/mixins/touch-action'], function (exports, _ember, _emberHammertimeMixinsTouchAction) {
  'use strict';

  var Component = _ember['default'].Component;

  exports['default'] = Component.reopen(_emberHammertimeMixinsTouchAction['default']);
});