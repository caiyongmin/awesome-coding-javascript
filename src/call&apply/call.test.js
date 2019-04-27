describe('implement Function.prototype.call2', () => {

  Function.prototype.call2 = function (...args) {
    // 使用 Symbol 创建一个全局唯一的函数名
    const __func__ = Symbol('__func__');
    let context = args.shift();
    // 非严格模式下
    if (context === undefined || context === null) {
      context = window || global;
    }
    else {
      context = Object(context);
    }

    // 赋予函数属性
    context[__func__] = this;
    // 函数执行
    const result = context[__func__](...args);
    // 删除临时函数属性
    Reflect.deleteProperty(context, __func__);

    return result;
  }

  it('use call2', () => {
    var foo = {
      value: 1,
    };
    function bar() {
      return this.value;
    };

    // 和原生 call 操作进行比较
    expect(bar.call2(foo)).toBe(bar.call(foo));
  });

  it('use call2 in constructor', () => {
    function Product(name, price) {
      this.name = name;
      this.price = price;
    }

    function Food(name, price) {
      Product.call(this, name, price);
      this.category = 'food';
    }
    function Food2(name, price) {
      Product.call2(this, name, price);
      this.category = 'food';
    }

    // 和原生 call 操作进行比较
    expect(new Food2('cheese', 5).name).toBe(new Food('cheese', 5).name);
  });

  it('use call2 when \'this\' is null or undefined', () => {
    window.value = 2;
    function bar() {
      return this.value;
    };
    // 非严格模式下的结果，严格模式下会报错
    expect(bar.call2(null)).toBe(2);
    expect(bar.call2(undefined)).toBe(2);
  });

  it('use call2 when \'this\' is other primitive value', () => {
    function bar() {
      return this.length;
    };

    // 和原生 call 操作进行比较
    expect(bar.call2('233')).toBe(bar.call('233'));
  });
});
