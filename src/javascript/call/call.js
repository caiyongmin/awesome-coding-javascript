export default function (...args) {
  // 使用 Symbol 创建一个全局唯一的函数名
  const func = Symbol('func');
  let context = args.shift();

  // 非严格模式下
  if (context == null) {
    context = window;
  }
  else {
    context = Object(context);
  }

  // 赋予函数属性
  context[func] = this;
  // 函数执行
  const result = context[func](...args);
  // 删除临时函数属性
  Reflect.deleteProperty(context, func);

  return result;
}
