/* eslint ember/no-observers: "off" */
import Component from '@glimmer/component';
import { scheduleOnce } from '@ember/runloop';
import { action } from '@ember/object';

export default class ScrollingObserverComponent extends Component {

  observer = null;

  get enabled () {
    if (typeof this.args.enabled === 'undefined') {
      return true;
    } else {
      return this.args.enabled;
    }
  }

  get retriggeringEnabled () {
    if (typeof this.args.retriggeringEnabled === 'undefined') {
      return true;
    } else {
      return this.args.retriggeringEnabled;
    }
  }

  get rootMargin () {
    return this.args.rootMargin || '0px';
  }

  get threshold () {
    return this.args.threshold || 0;
  }

  @action
  createObserver (element) {
    scheduleOnce('afterRender', this, this.createIntersectionObserver, element);
  }

  @action
  disconnectObserver () {
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  retriggerObservation (observer, target) {
    observer.unobserve(target);
    observer.observe(target);
  }

  createIntersectionObserver (element) {
    let rootElement = this.args.rootElement;
    if (typeof rootElement === 'string') {
      rootElement = document.querySelector(rootElement);
    }

    const config = {
      root: rootElement,
      rootMargin: this.rootMargin,
      threshold: this.threshold
    };

    let observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (this.args.onIntersect) {
            this.args.onIntersect();
          }
          if (this.enabled && this.retriggeringEnabled) {
            scheduleOnce('afterRender', this, 'retriggerObservation', observer, entry.target);
          }
        } else {
          if (this.args.onDiverge) {
            this.args.onDiverge();
          }
        }
      });
    }, config);

    observer.observe(element);

    this.observer = observer;
  }

  @action
  rootMarginChanged (element) {
    if (this.enabled && this.observer) {
      this.observer.disconnect();
      this.createIntersectionObserver(element);
    }
  }

  @action
  enabledChanged  (element) {
    if (this.enabled) {
      this.observer.observe(element);
    } else {
      this.observer.disconnect();
    }
  }

}
