export default function (...bindArgs) {
  // 函数自身
  const self = this;
  // 传进来的 this 对象
  let context = bindArgs.shift();

  // 非严格模式下，传 null 或者 undeinfed，context 等于 window 对象
  if (context == null) {
    context = window;
  }
  else {
    context = Object(context);
  }

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
}
