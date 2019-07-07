describe('implement Function.prototype.bind2', () => {

  Function.prototype.bind2 = function (...bindArgs) {
    // 函数自身
    const self = this;
    // 传进来的 this 对象
    let context = bindArgs.shift();

    // 返回的新函数
    const fBound = function (...args) {
      // 当返回的新函数作为构造函数使用时，之前指定的 this 对象会失效，此时 this 是指向实例对象
      if (this instanceof fBound) {
        context = this;
      }
      // 函数运行并返回结果
      return self.apply(context, [...bindArgs, ...args]);
    };
    // 修改返回函数的原型对象，实例对象就可以从原函数的原型对象上继承属性和方法
    fBound.prototype = Object.create(self.prototype);

    return fBound;
  };

  it('use bind2', () => {
    const foo = {
      value: 1,
    };
    function bar(age1, age2) {
      age1 = age1 || 0;
      age2 = age2 || 0;
      return this.value + age1 + age2;
    }
    expect((bar.bind2(foo, 3))(2)).toBe((bar.bind(foo, 3))(2));
  });

  it('use return function as a constructor', () => {
    const foo = { value: 1 };
    function bar(name, age) {
      this.name = name;
      this.age = age;
    }
    bar.prototype.friend = 'kevin';

    const bindFoo = bar.bind(foo);  // 原生 bind 操作生成的实例对象
    const bindFoo2 = bar.bind2(foo);
    bindFoo2.prototype.address = 1; // 修改返回函数的原型对象

    // 验证返回的函数作为构造函数，实例对象会从原函数的原型对象上继承属性
    expect(new bindFoo2().friend).toBe(new bindFoo().friend);
    // 验证返回的函数作为构造函数，之前绑定的 this 对象会失效，this 会指向实例对象
    expect(new bindFoo2().value).toBe(undefined);
    expect(new bindFoo2().value).toBe(new bindFoo().value);
    // 验证修改返回函数的原型对象，不会引起原始函数 bar 原型对象的修改
    expect(bar.prototype.address).toBe(undefined);
  });

  it('rebind this arg', () => {
    const foo = {
      value: 1,
    };
    function bar(age1, age2) {
      age1 = age1 || 0;
      age2 = age2 || 0;
      return this.value + age1 + age2;
    }
    const bindFoo = bar.bind(foo);  // 原生 bind 操作生成的实例对象
    const bindFoo2 = bar.bind2(foo);

    // 对返回的函数用 call 或者 apply 重新绑定 this 对象时，this 对象不会发生改变
    expect(bindFoo2.call({ value: 2 })).toBe(1);
    expect(bindFoo2.call({ value: 2 })).toBe(bindFoo.call({ value: 2 }));
  });
});
