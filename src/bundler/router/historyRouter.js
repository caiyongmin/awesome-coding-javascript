// HistoryRouter similar with HashRouter
class HistoryRouter { // eslint-disable-line no-unused-vars
  constructor() {
    this.routers = {};
    /**
     * invoke this.init method, init event listener
     */
    this.init();
  }

  init = () => {
    /**
     * invoke this.wrapALink()
     */
    this.wrapALink();
    window.addEventListener('popstate', this.updateView, false);
    window.addEventListener('load', this.updateView, false);
  }

  /**
   * wrap a link prevent event default
   */
  wrapALink = () => {
    const me = this;
    const links = document.links;

    for (let i = 0; i < links.length; i++) {
      const link = links[i];
      link.addEventListener('click', function (e) {
        e.preventDefault();
        history.pushState(null, null, link.pathname);
        me.updateView();
      });
    }
  }

  route = (path, callback) => {
    if (!path || typeof path !== 'string') {
      return;
    }

    this.routers[path] = callback || function () {};
  }

  updateView = () => {
    const currentUrl = location.pathname;

    if (this.routers[currentUrl]) {
      this.routers[currentUrl]();
    }
  }
}
