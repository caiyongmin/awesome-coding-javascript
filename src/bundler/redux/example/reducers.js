import { ActionTypes } from './actions';

function id(state = []) {
  return state.reduce((result, item) => (
    item.id > result ? item.id : result
  ), 0) + 1;
}

export function todos(state = [], action) {
  switch (action.type) {
  case ActionTypes.ADD_TODO:
    return [
      ...state,
      {
        id: id(state),
        text: action.text
      }
    ];
  default:
    return state;
  }
}

export function todosReverse(state = [], action) {
  switch (action.type) {
  case ActionTypes.ADD_TODO:
    return [
      {
        id: id(state),
        text: action.text
      }, ...state
    ];
  default:
    return state;
  }
}

export function dispatchInTheMiddleOfReducer(state = [], action) {
  switch (action.type) {
  case ActionTypes.DISPATCH_IN_MIDDLE:
    action.boundDispatchFn();
    return state;
  default:
    return state;
  }
}

export function errorThrowingReducer(state = [], action) {
  switch (action.type) {
  case ActionTypes.THROW_ERROR:
    throw new Error();
  default:
    return state;
  }
}
