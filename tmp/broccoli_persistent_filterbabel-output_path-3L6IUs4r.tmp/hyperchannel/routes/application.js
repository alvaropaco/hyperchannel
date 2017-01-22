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