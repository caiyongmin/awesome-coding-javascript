// Copyright 2019 caicloud authors. All rights reserved.

export function objectFactory(Factory, ...args) {
  const instance = Object.create(Factory.prototype);
  const ret = Factory.apply(instance, args);

  return ret instanceof Object ? ret : instance;
}
