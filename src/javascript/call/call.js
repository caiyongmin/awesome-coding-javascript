export default function (...args) {
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

  // 赋予函数属性
  context[__func__] = this;
  // 函数执行
  const result = context[__func__](...args);
  // 删除临时函数属性
  Reflect.deleteProperty(context, __func__);

  return result;
}
