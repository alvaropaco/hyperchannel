import Service from '@ember/service';
import Ember from 'ember';
import Space from 'hyperchannel/models/space';
import RemoteStorage from 'npm:remotestoragejs';
import Kosmos from 'npm:remotestorage-module-kosmos';

export default Service.extend({

  rs: null,

  init () {
    this._super(...arguments);

    const rs =  new RemoteStorage({modules: [Kosmos.default]});
    rs.access.claim('kosmos', 'rw');
    rs.caching.enable('/kosmos/');

    this.set('rs', rs);
  },

  addDefaultSpace() {
    let nickname = window.prompt("Choose a nickname");

    let params = {
      id: 'freenode',
      name: 'Freenode',
      protocol: 'IRC',
      server: {
        hostname: 'irc.freenode.net',
        secure: true,
        port: 7000,
        nickname: nickname
      },
      channels: [
        '#hackerbeach',
        '#kosmos',
        '#kosmos-dev',
        '#kosmos-random',
        '#sockethub'
      ]
    };

    return this.get('rs').kosmos.spaces.store(params)
      .then(() => {
        Ember.Logger.debug('[remotestorage]', 'created/stored default space');

        let channels = params.channels;
        delete params.channels;

        const space = Space.create();
        space.setProperties(params);

        return { space, channels };
      });
  },

  saveSpace(space) {
    return this.get('rs').kosmos.spaces.store(space.serialize())
      .then(() => Ember.Logger.debug('[remotestorage]', `saved space ${space.get('name')} in RS`));
  },

  removeSpace(space) {
    // TODO this is buggy in the current rs.js beta branch
    return this.get('rs').kosmos.spaces.remove(space.get('id'))
      .then(() => Ember.Logger.debug('[remotestorage]', `removed space ${space.get('name')} from RS`));
  }

});