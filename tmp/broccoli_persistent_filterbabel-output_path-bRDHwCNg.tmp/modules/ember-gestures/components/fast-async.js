import Ember from 'ember';
import layout from '../templates/components/fast-async';
import asyncAction from './async-element';

var SafeString = Ember.Handlebars.SafeString;

export default asyncAction.extend({

  layout: layout,
  tagName: 'button',
  attributeBindings: ['style', 'disabled', 'type'],
  style: new SafeString('touch-action: manipulation; -ms-touch-action: manipulation;'),
  type: 'button',
  text: '',
  context: null

});