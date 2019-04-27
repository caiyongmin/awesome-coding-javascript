import isArrayLike from './../shared/isArrayLike';

describe('implement Function.prototype.apply2', () => {

  Function.prototype.apply2 = function (...args) {
    // 使用 Symbol 创建一个全局唯一的函数名
    const __func__ = Symbol('__func__');
    let context = args.shift();
    // 非严格模式下
    if (context === undefined || context === null) {
      context = window;
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

    // 赋予函数属性
    context[__func__] = this;
    // 函数执行
    const result = runArg ? context[__func__](...runArg) : context[__func__]();
    // 删除临时函数属性
    Reflect.deleteProperty(context, __func__);

    return result;
  };

  it('use apply2', () => {
    const foo = {
      value: 1,
    };
    function bar() {
      return this.value;
    }

    // 和原生 apply 操作进行比较
    expect(bar.apply2(foo)).toBe(bar.apply(foo));
  });

  it('use apply2 in constructor', () => {
    function Product(name, price) {
      this.name = name;
      this.price = price;
    }
    function Food(name, price) {
      Product.apply(this, [name, price]);
      this.category = 'food';
    }
    function Food2(name, price) {
      Product.apply2(this, [name, price]);
      this.category = 'food';
    }

    // 和原生 apply 操作进行比较
    expect(new Food('cheese', 5).name).toBe(new Food2('cheese', 5).name);
  });

  it('use apply2 when \'this\' is null or undefined', () => {
    window.value = 2;
    function bar() {
      return this.value;
    }

    // 非严格模式下的结果，严格模式下会报错
    expect(bar.apply2(null)).toBe(2);
    expect(bar.apply2(undefined)).toBe(2);
  });

  it('use apply2 when \'this\' is other primitive value', () => {
    function bar() {
      return this.length;
    }

    // 和原生 apply 操作进行比较
    expect(bar.apply2('233')).toBe(bar.apply('233'));
  });

  it('use apply2 when \'runArg\' is not array like object', () => {
    const foo = {
      value: 1,
    };
    function bar(name, age) {
      return `${name}: ${age}`;
    }
    const f = function () {
      // 后面传入的参数不是一个数组
      bar.apply2(foo, 'jack', 12);
    };

    expect(f).toThrowError(TypeError('CreateListFromArrayLike called on non-object'));
  });

  it('use apply2 when assgin multiple runArgs', () => {
    const numbers = [5, 6, 2, 3, 7];

    const max = Math.max.apply(null, numbers, [10, 11, 12]);
    const max2 = Math.max.apply2(null, numbers, [10, 11, 12]);

    // 当后面传入多个数组参数时，只会取第一个数组参数
    expect(max2).toBe(7);
    expect(max2).toBe(max);
  });
});
