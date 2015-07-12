/* global remoteStorage */
import Ember from 'ember';

export default Ember.Route.extend({

  beforeModel() {
    remoteStorage.kosmos.client.getListing('spaces/').then((data) => {
      if (Object.keys(data).length > 0) {
        return true;
      } else {
        Ember.Logger.debug('No space configuration found. Redirecting to welcome screen.');
        this.transitionTo('welcome');
      }
    }, (error) => {
      console.error(error);
      return false;
    });
  },

  model() {
    // this.smt.loadFixtures();
  }

});
