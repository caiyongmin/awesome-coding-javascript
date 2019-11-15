import call from './call';

describe('Function.prototype.call', () => {

  Function.prototype._call = call;

  it('change the direction of this', () => {
    const foo = {
      value: 1,
    };
    function bar() {
      return this.value;
    }

    // 和原生的 call 操作进行比较验证
    expect(bar._call(foo)).toBe(bar.call(foo));
  });

  it('change the direction of this, use in constructor', () => {
    function Product(name, price) {
      this.name = name;
      this.price = price;
    }

    function Food(name, price) {
      Product.call(this, name, price);
      this.category = 'food';
    }
    function Food2(name, price) {
      Product._call(this, name, price);
      this.category = 'food';
    }

    // 和原生的 call 操作进行比较验证
    expect(new Food2('cheese', 5).name).toBe(new Food('cheese', 5).name);
  });

  it('when \'this\' argument is null or undefined', () => {
    window.value = 2;
    function bar() {
      return this.value;
    }
    // 这是非严格模式下的运行结果，严格模式下会报错
    expect(bar._call(null)).toBe(2);
    expect(bar._call(undefined)).toBe(2);
  });

  it('when \'this\' is other primitive value, excute success', () => {
    function bar() {
      return this.length;
    }

    // 和原生的 call 操作进行比较验证
    expect(bar._call('123')).toBe(bar.call('123'));
  });
});
