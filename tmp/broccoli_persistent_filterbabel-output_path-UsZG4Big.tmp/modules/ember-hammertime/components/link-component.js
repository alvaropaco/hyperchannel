import Ember from 'ember';
import TouchActionMixin from '../mixins/touch-action';

var LinkComponent = Ember.LinkComponent || Ember.LinkView;

export default LinkComponent.reopen(TouchActionMixin);