import { objectFactory } from './new';

describe('use objectFactory function to implement the new method', () => {
  it('create instance', () => {
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

  it('Factory function return object', () => {
    const Factory = function (name, age) {
      this.name = name;
      this.age = age;

      return {
        name: 'john',
      }
    }

    Factory.prototype.getName = function () {
      return this.name;
    }

    const f = objectFactory(Factory, 'jack', 12);
    expect(f.name).toBe('john');
    expect(f.age).toBe(undefined);
    expect(f.getName).toBe(undefined);
  });

  it('Factory return primitive value', () => {
    const Factory = function (name, age) {
      this.name = name;
      this.age = age;

      return 233;
    }

    Factory.prototype.getName = function () {
      return this.name;
    }

    const f = objectFactory(Factory, 'jack', 12);
    expect(f.name).toBe('jack');
    expect(f.age).toBe(12);
    expect(f.getName()).toBe('jack');
  });

  it('Factory is not a function', () => {
    const Factory = 123;
    function f() {
      objectFactory(Factory);
    };

    expect(f).toThrowError(Error('Factory need be a function'));
  });

  it('arrow function not allowed', () => {
    const Factory = (name, age) => {
      this.name = name;
      this.age = age;

      return 233;
    }

    function f() {
      objectFactory(Factory);
    };

    expect(f).toThrowError(Error('arrow function not allowed'));
  });
});
