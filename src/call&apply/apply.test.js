import isArrayLike from './../shared/isArrayLike';

describe('implement Function.prototype.apply2', () => {

  Function.prototype.apply2 = function (...args) {
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
    // 下面函数执行时的运行参数
    const runArg = args.shift();

    // 如果 runArg 不是 undefiend 或 null，但是 runArg 不是类数组时，会报错
    if (runArg && !isArrayLike(runArg)) {
      throw new TypeError('CreateListFromArrayLike called on non-object');
    }

    context[__func__] = this;  // 赋予函数属性
    const result = runArg ? context[__func__](...runArg) : context[__func__]();  // 函数执行
    Reflect.deleteProperty(context, __func__);  // 删除临时函数属性

    return result;
  }

  it('use apply2', () => {
    var foo = {
      value: 1,
    };
    function bar() {
      return this.value;
    };
    expect(bar.apply2(foo)).toBe(1);
  });

  it('use apply2 in constructor', () => {
    function Product(name, price) {
      this.name = name;
      this.price = price;
    }
    function Food(name, price) {
      Product.apply2(this, [name, price]);
      this.category = 'food';
    }

    expect(new Food('cheese', 5).name).toBe('cheese');
  });

  it('use apply2, when \'this\' is null or undefined', () => {
    window.value = 2;
    function bar() {
      return this.value;
    };
    expect(bar.apply2(null)).toBe(2);
    expect(bar.apply2(undefined)).toBe(2);
  });

  it('use apply2, when \'this\' is other primitive value', () => {
    function bar() {
      return this.length;
    };
    expect(bar.apply2('233')).toBe(3);
  });

  it('use apply2, when \'runArg\' is not array like object', () => {
    var foo = {
      value: 1,
    };
    function bar(name, age) {
      return `${name}: ${age}`;
    };
    const f = function () {
      bar.apply2(foo, 'jack', 12);
    }

    expect(f).toThrowError(TypeError('CreateListFromArrayLike called on non-object'));
  });
});
