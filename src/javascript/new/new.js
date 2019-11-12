import { isArrowFunction } from './../../shared/is';

export function objectFactory(Factory, ...args) {
  if (typeof Factory !== 'function') {
    throw new Error('need be a function argument');
  }

  if (isArrowFunction(Factory)) {
    throw new Error('arrow function is not allowed');
  }

  const instance = Object.create(Factory.prototype);  // 创建实例对象
  const result = Factory.apply(instance, args);  // 执行构造函数

  return result instanceof Object ? result : instance;
}
