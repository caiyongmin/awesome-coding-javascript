export const ActionTypes = {
  INIT: '@@redux/INIT',
};

export function compose(...funcs) {
  if (funcs.length === 0) {
    return arg => arg;
  }

  if (funcs.length === 1) {
    return funcs[0];
  }

  return funcs.reduce((a, b) => (...args) => a(b(...args)));
}

export function applyMiddleware(...middlewares) {
  return _createStore => (reducer, initialState) => {
    const store = _createStore(reducer, initialState);
    let dispatch = store.dispatch;

    const chain = middlewares.map(middleware => middleware({
      getState: store.getState,
      dispatch: action => dispatch(action),
    }));
    dispatch = compose(...chain)(store.dispatch);

    return {
      ...store,
      dispatch,
    };
  };
}

export function combineReducers(reducers) {
  const pick = (obj, fn) => {
    return Object.keys(obj).reduce((result, key) => {
      if (fn(obj[key])) {
        result[key] = obj[key];
      }
      return result;
    }, {});
  };
  const mapObjValues = (obj, fn) => {
    return Object.keys(obj).reduce((result, key) => {
      result[key] = fn(obj[key], key);
      return result;
    }, {});
  };

  const finalReducers = pick(reducers, arg => typeof arg === 'function');

  return (state = {}, action) =>
    mapObjValues(
      finalReducers,
      (reducer, key) => reducer(state[key], action)
    );
}

export function createStore(reducer, initialState, enhancer) {
  // use middleware
  if (typeof enhancer === 'function') {
    return enhancer(createStore)(reducer, initialState);
  }

  const listeners = [];
  let currentReducer = reducer;
  let currentState = initialState;
  let isDispatching = false;

  function getState() {
    return currentState;
  }

  function subscribe(listener) {
    let isSubscribed = true;
    listeners.push(listener);

    return function unsubscribe() {
      if (!isSubscribed) {
        return;
      }
      listeners.splice(listeners.indexOf(listener), 1);
      isSubscribed = false;
    };
  }

  function dispatch(action) {
    if (isDispatching) {
      throw new Error('store is dispatching');
    }

    try {
      isDispatching = true;
      currentState = currentReducer(currentState, action);
    }
    finally {
      isDispatching = false;
    }

    listeners.slice().forEach(listener => listener());
    return action;
  }

  function replaceReducer(nextReducer) {
    currentReducer = nextReducer;
    dispatch({ type: ActionTypes.INIT });
  }

  dispatch({ type: ActionTypes.INIT });

  return {
    getState,
    subscribe,
    replaceReducer,
    dispatch,
  };
}
