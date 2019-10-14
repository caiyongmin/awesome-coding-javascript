// hashRouter constructor
class HashRouter { // eslint-disable-line no-unused-vars
  constructor() {
    /**
     * set this.routers map object, like:
     * { '/about': () => any }
     */
    this.routers = {};
    /**
     * invoke this.init method, init event listener
     */
    this.init();
  }

  /**
   * 1.listen window.load event
   * 2.listen window.hashchange event
   * 3.all bind to this.updateView method
   */
  init = () => {
    window.addEventListener('load', this.updateView, false);
    window.addEventListener('hashchange', this.updateView, false);
  }

  /**
   * get router path from window.location.hash
   * excute path's callback
   */
  updateView = () => {
    const currentUrl = window.location.hash.slice(1);
    this.routers[currentUrl] && this.routers[currentUrl]();
  }

  /**
   * register router path and it's callback
   */
  route = (path, callback) => {
    if (!path) {
      return;
    }

    this.routers[path] = callback || function () {};
  }
}
