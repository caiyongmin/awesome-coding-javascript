import { objectFactory } from './new';

describe('new', () => {
  it('take a function as an argument', () => {
    const Factory = 123;
    function excute() {
      objectFactory(Factory);
    }

    expect(excute).toThrowError('need be a function argument');
  });

  it('cannot be an arrow function', () => {
    const Factory = (name, age) => {
      this.name = name;
      this.age = age;

      return 233;
    };

    function excute() {
      objectFactory(Factory);
    }

    expect(excute).toThrowError('arrow function is not allowed');
  });

  it('create a instance', () => {
    function Factory(name, age) {
      this.name = name;
      this.age = age;
    }

    Factory.prototype.getName = function () {
      return this.name;
    };

    const f = objectFactory(Factory, 'jack', 12);
    const nf = new Factory('jack', 12);  // 原生的 new 操作生成的实例对象

    expect(f.name).toBe(nf.name);
    expect(f.age).toBe(nf.age);
    expect(f.getName()).toBe(nf.getName());
  });

  it('if return a primitive value, return the newly instance', () => {
    const Factory = function (name, age) {
      this.name = name;
      this.age = age;

      return 233;
    };

    Factory.prototype.getName = function () {
      return this.name;
    };

    const f = objectFactory(Factory, 'jack', 12);
    const nf = new Factory('jack', 12);  // 原生的 new 操作生成的实例对象

    expect(f.name).toBe(nf.name);
    expect(f.age).toBe(nf.age);
    expect(f.getName()).toBe(nf.getName());
  });

  it('if return a object, return the object', () => {
    const Factory = function (name, age) {
      this.name = name;
      this.age = age;

      return {
        name: 'john',
      };
    };

    Factory.prototype.getName = function () {
      return this.name;
    };

    const f = objectFactory(Factory, 'jack', 12);
    const nf = new Factory('jack', 12);  // 原生的 new 操作生成的实例对象

    expect(f.name).toBe(nf.name);
    expect(f.age).toBe(nf.age);
    expect(f.getName).toBe(nf.getName);
  });
});
