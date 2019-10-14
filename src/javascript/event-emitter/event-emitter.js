export default class EventEmitter {
  constructor() {
    this.listeners = {};
  }

  on = (event, listener) => {
    this.bindEvent(event, listener, false);
  }

  once = (event, listener) => {
    this.bindEvent(event, listener, true);
  }

  emit = (event, ...args) => {
    if (!this.hasBind(event)) {
      return;
    }

    const { listeners, isOnce } = this.listeners[event];
    listeners.forEach(listener => listener.call(this, ...args));
    if (isOnce) {
      this.off(event);
    }
  }

  off = (event, listener) => {
    if (!this.hasBind(event)) {
      return;
    }

    if (!listener) {
      delete this.listeners[event];
      return;
    }

    const listeners = this.listeners[event].listeners;
    listeners.forEach(listener => {
      const index = listeners.indexOf(listener);
      if (index !== -1) {
        listeners.splice(index, 1);
      }
    });
  }

  hasBind = event => {
    return this.listeners[event]
      && this.listeners[event].listeners
      && this.listeners[event].listeners.length;
  }

  bindEvent = (event, listener, isOnce = false) => {
    if (!event || !listener) {
      return;
    }

    this.listeners[event] = this.listeners[event] || {
      isOnce: false,
      listeners: []
    };
    this.listeners[event].isOnce = isOnce;

    if (isOnce) {
      this.listeners[event].listeners = [listener];
    }
    else {
      this.listeners[event].listeners.push(listener);
    }
  }
}
