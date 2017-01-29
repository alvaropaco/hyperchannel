/* global SockethubClient */
/* global io */
import Ember from 'ember';
import config from 'hyperchannel/config/environment';

export default {
  name: 'sockethub',

  initialize: function(app) {
    // TODO move settings into config file
    let sockethub = new SockethubClient(io(config.sockethubURL, { path: '/sockethub' }));

    ["event", "connect", "error", "disconnect", "reconnect", "reconnect_attempt",
     "reconnecting", "reconnect_error", "reconnect_failed"].forEach(evtName => {
       sockethub.socket.on(evtName, data => {
         Ember.Logger.debug('[socket.io]', `"${evtName}"`, data);
       });
    });

    app.register('sockethub:client', sockethub, {instantiate: false, singleton: true});

    app.inject('controller', 'sockethub', 'sockethub:client');
    app.inject('route',      'sockethub', 'sockethub:client');
    app.inject('component',  'sockethub', 'sockethub:client');
    app.inject('service',    'sockethub', 'sockethub:client');
  }
};
