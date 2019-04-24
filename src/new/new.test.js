// Copyright 2019 caicloud authors. All rights reserved.

import { objectFactory } from './new';

describe('Use objectFactory to implement the new method', () => {
  it('create new object', () => {
    const Factory = function (name, age) {
      this.name = name;
      this.age = age;
    }

    Factory.prototype.getName = function () {
      return this.name;
    }

    const f = objectFactory(Factory, 'jack', 12);
    expect(f.name).toBe('jack');
    expect(f.age).toBe(12);
    expect(f.getName()).toBe('jack');
  });
});
