import apply from './apply';

describe('Function.prototype.apply', () => {

  Function.prototype._apply = apply;

  it('change the direction of this', () => {
    const foo = {
      value: 1,
    };
    function bar() {
      return this.value;
    }

    // 和原生的 apply 操作进行比较验证
    expect(bar._apply(foo)).toBe(bar.apply(foo));
  });

  it('change the direction of this, use in constructor', () => {
    function Product(name, price) {
      this.name = name;
      this.price = price;
    }
    function Food(name, price) {
      Product.apply(this, [name, price]);
      this.category = 'food';
    }
    function Food2(name, price) {
      Product._apply(this, [name, price]);
      this.category = 'food';
    }

    // 和原生的 apply 操作进行比较验证
    expect(new Food('cheese', 5).name).toBe(new Food2('cheese', 5).name);
  });

  it('when \'this\' argument is null or undefined', () => {
    window.value = 2;
    function bar() {
      return this.value;
    }

    // 非严格模式下的结果，严格模式下会报错
    expect(bar._apply(null)).toBe(2);
    expect(bar._apply(undefined)).toBe(2);
  });

  it('when \'this\' is other primitive value, excute success', () => {
    function bar() {
      return this.length;
    }

    // 和原生的 apply 操作进行比较验证
    expect(bar._apply('123')).toBe(bar.apply('123'));
  });

  it('when \'runArg\' is not array like object, will throw an error', () => {
    const foo = {
      value: 1,
    };
    function bar(name, age) {
      return `${name}: ${age}`;
    }
    const excute = function () {
      // 后面传入的参数不是一个类数组
      bar._apply(foo, 'jack', 12);
    };

    expect(excute).toThrowError('CreateListFromArrayLike called on non-object');
  });

  it('when assgin multiple runArg, will only get the first one', () => {
    const numbers = [5, 6, 2, 3, 7];

    const max = Math.max.apply(null, numbers, [10, 11, 12]);
    const max2 = Math.max._apply(null, numbers, [10, 11, 12]);

    // 当后面传入多个数组参数时，只会取第一个数组参数
    expect(max2).toBe(7);
    expect(max2).toBe(max);
  });
});
