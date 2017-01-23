import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('space', {path: '/:id'}, function() {
    this.route('channel', {path: '/channel/:slug'});
    this.route('userChannel', {path: '/user/:slug'});
  });

  this.route('settings');
});

export default Router;