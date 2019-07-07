import call from './call';

describe('implement Function.prototype.call2', () => {

  Function.prototype.call2 = call;

  it('use call2', () => {
    var foo = {
      value: 1,
    };
    function bar() {
      return this.value;
    }

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
    }
    // 非严格模式下的结果，严格模式下会报错
    expect(bar.call2(null)).toBe(2);
    expect(bar.call2(undefined)).toBe(2);
  });

  it('use call2 when \'this\' is other primitive value', () => {
    function bar() {
      return this.length;
    }

    // 和原生 call 操作进行比较
    expect(bar.call2('233')).toBe(bar.call('233'));
  });
});
