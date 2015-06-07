import Ember from 'ember';

export default Ember.Component.extend({

  tagName: 'form',

  submit: function() {
    console.debug('submit');
    this.sendAction();
  },

  click: function() {
    console.debug('click')r
  }

});
