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