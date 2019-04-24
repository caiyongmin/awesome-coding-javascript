import { isArrowFunction } from './../utils';

export function objectFactory(Factory, ...args) {
  if (typeof Factory !== 'function') {
    throw new Error('Factory need be a function');
  }

  if (isArrowFunction(Factory)) {
    throw new Error('arrow function not allowed');
  }

  const instance = Object.create(Factory.prototype);
  const ret = Factory.apply(instance, args);

  return ret instanceof Object ? ret : instance;
}
