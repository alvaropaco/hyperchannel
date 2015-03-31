import Ember from 'ember';

export default Ember.Object.extend({

  name      : '',
  ircServer : {},
  channels  : null,
  users     : null,

  id: function() {
    // This could be based on server type in the future. E.g. IRC would be
    // server URL, while Campfire would be another id.
    return this.get('name').toLowerCase();
  }.property('name')

});
