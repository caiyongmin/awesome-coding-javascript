export const ActionTypes = {
  ADD_TODO: 'ADD_TODO',
  DISPATCH_IN_MIDDLE: 'DISPATCH_IN_MIDDLE',
  UNKNOWN_ACTION: 'UNKNOWN_ACTION',
  THROW_ERROR: 'THROW_ERROR',
};

export function addTodo(text) {
  return {
    type: ActionTypes.ADD_TODO,
    text,
  };
}

export function addTodoAsync(text) {
  return dispatch =>
    new Promise(resolve => {
      setImmediate(() => {
        dispatch(addTodo(text));
        resolve();
      });
    });
}

export function unknownAction() {
  return {
    type: ActionTypes.UNKNOWN_ACTION
  };
}

export function dispatchInMiddle(boundDispatchFn) {
  return {
    type: ActionTypes.DISPATCH_IN_MIDDLE,
    boundDispatchFn
  };
}
