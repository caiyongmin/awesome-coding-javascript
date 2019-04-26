import isArrowFunction from '../shared/isArrowFunction';

export function objectFactory(Factory, ...args) {
  if (typeof Factory !== 'function') {
    throw new Error('Factory need be a function');
  }

  if (isArrowFunction(Factory)) {
    throw new Error('arrow function not allowed');
  }

  const instance = Object.create(Factory.prototype);  // 创建实例对象
  const ret = Factory.apply(instance, args);  // 执行构造函数

  return ret instanceof Object ? ret : instance;
}
