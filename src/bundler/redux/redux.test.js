import * as reducers from './test/reducers';
import { createStore, combineReducers, compose, applyMiddleware } from './redux';
import { addTodo, unknownAction, dispatchInMiddle, addTodoAsync } from './test/actions';
import { thunkMiddleware } from './middlewares';

describe('createStore', () => {
  it('should exposes the public API', () => {
    const store = createStore(combineReducers(reducers));
    const methods = Object.keys(store);

    expect(methods.length).toBe(4);
    expect(methods).toContain('getState');
    expect(methods).toContain('dispatch');
    expect(methods).toContain('subscribe');
    expect(methods).toContain('replaceReducer');
  });

  it('initialState & getState', () => {
    const initialState = [{ id: 0, text: 'hah' }];
    const store = createStore(reducers.todos, initialState);
    expect(store.getState()).toEqual(initialState);
  });

  it('dispatch action', () => {
    const store = createStore(reducers.todos);
    store.dispatch(addTodo('hah'));
    expect(store.getState()).toEqual([{ id: 1, text: 'hah' }]);
    store.dispatch(unknownAction());
    expect(store.getState()).toEqual([{ id: 1, text: 'hah' }]);
  });

  it('dispatch action in middle', () => {
    const store = createStore(reducers.dispatchInTheMiddleOfReducer);
    expect(() => {
      const action = dispatchInMiddle(store.dispatch.bind(store, unknownAction()));
      store.dispatch(action);
    }).toThrow(/store is dispatching/);
  });

  it('subscribe', () => {
    const subA = jest.fn();
    const subB = jest.fn();
    const store = createStore(reducers.todos);

    const unSubA = store.subscribe(subA);
    store.dispatch(unknownAction());
    expect(subA.mock.calls.length).toBe(1);
    expect(subB.mock.calls.length).toBe(0);

    const unSubB = store.subscribe(subB);
    store.dispatch(unknownAction());
    expect(subA.mock.calls.length).toBe(2);
    expect(subB.mock.calls.length).toBe(1);

    unSubA();
    store.dispatch(unknownAction());
    expect(subA.mock.calls.length).toBe(2);
    expect(subB.mock.calls.length).toBe(2);

    unSubB();
    store.dispatch(unknownAction());
    expect(subA.mock.calls.length).toBe(2);
    expect(subB.mock.calls.length).toBe(2);
  });

  it('replace reducer', () => {
    const store = createStore(reducers.todos, [{ id: 1, text: 'first' }]);
    store.dispatch(addTodo('second'));
    expect(store.getState()).toEqual([
      { id: 1, text: 'first' },
      { id: 2, text: 'second' }
    ]);
    store.replaceReducer(reducers.todosReverse);
    store.dispatch(addTodo('third'));
    expect(store.getState()).toEqual([
      { id: 3, text: 'third' },
      { id: 1, text: 'first' },
      { id: 2, text: 'second' }
    ]);
  });
});

describe('compose', () => {
  it('composes from right to left', () => {
    const double = x => x * 2;
    const square = x => x * x;
    expect(compose(double)(5)).toBe(10);
    expect(compose(double, square)(5)).toBe(50);
    expect(compose(double, square, double)(5)).toBe(200);
  });

  it('composes functions right to left', () => {
    const a = next => x => next(`${x}a`);
    const b = next => x => next(`${x}b`);
    const c = next => x => next(`${x}c`);
    const final = x => x;
    expect(compose(a, b, c)(final)('')).toBe('abc');
    expect(compose(b, c, a)(final)('')).toBe('bca');
    expect(compose(a, c, b)(final)('')).toBe('acb');
  });

  it('composes zero', () => {
    expect(compose()('')).toBe('');
  });

  it('composes only one', () => {
    const double = x => x * 2;
    expect(compose(double)(1)).toBe(2);
  });
});

describe('applyMiddleware', () => {
  it('work with thunk middleware', done => {
    const initialState = [{ id: 1, text: 'hah' }];
    const enhancer = applyMiddleware(thunkMiddleware);
    const store = createStore(reducers.todos, initialState, enhancer);
    const asyncAction = addTodoAsync('abc');
    store.dispatch(asyncAction).then(() => {
      expect(store.getState()).toEqual([
        { id: 1, text: 'hah' },
        { id: 2, text: 'abc' },
      ]);
      done();
    });
  });
});
