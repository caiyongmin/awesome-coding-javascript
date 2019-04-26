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

    context[__func__] = this;  // 赋予函数属性
    const result = context[__func__](...args);  // 函数执行
    Reflect.deleteProperty(context, __func__);  // 删除临时函数属性

    return result;
  }

  it('use call2', () => {
    var foo = {
      value: 1,
    };
    function bar() {
      return this.value;
    };
    expect(bar.call2(foo)).toBe(1);
  });

  it('use call2 in constructor', () => {
    function Product(name, price) {
      this.name = name;
      this.price = price;
    }
    function Food(name, price) {
      Product.call2(this, name, price);
      this.category = 'food';
    }

    expect(new Food('cheese', 5).name).toBe('cheese');
  });

  it('use call2, when \'this\' is null or undefined', () => {
    window.value = 2;
    function bar() {
      return this.value;
    };
    expect(bar.call2(null)).toBe(2);
    expect(bar.call2(undefined)).toBe(2);
  });

  it('use call2, when \'this\' is other primitive value', () => {
    function bar() {
      return this.length;
    };
    expect(bar.call2('233')).toBe(3);
  });
});
