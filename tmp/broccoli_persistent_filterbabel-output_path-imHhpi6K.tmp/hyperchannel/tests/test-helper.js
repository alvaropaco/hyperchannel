define('hyperchannel/tests/test-helper', ['exports', 'hyperchannel/tests/helpers/resolver', 'ember-qunit'], function (exports, _hyperchannelTestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_hyperchannelTestsHelpersResolver['default']);
});