import Ember from 'ember';

const {
  Route,
  inject: {
    service
  }
} = Ember;

export default Route.extend({

  smt: service(),

  model() {
    this.get('smt').setupListeners();
    return this.get('smt').instantiateSpacesAndChannels();
  }

});

