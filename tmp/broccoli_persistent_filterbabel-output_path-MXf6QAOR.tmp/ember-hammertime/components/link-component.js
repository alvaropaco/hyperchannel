define('ember-hammertime/components/link-component', ['exports', 'ember', 'ember-hammertime/mixins/touch-action'], function (exports, _ember, _emberHammertimeMixinsTouchAction) {
  'use strict';

  var LinkComponent = _ember['default'].LinkComponent || _ember['default'].LinkView;

  exports['default'] = LinkComponent.reopen(_emberHammertimeMixinsTouchAction['default']);
});