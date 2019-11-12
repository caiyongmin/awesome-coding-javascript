import { isArrayLike } from './../../shared/is';

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

  // 下面函数执行时的运行参数
  const runArg = args.shift();

  // 如果 runArg 不是 undefiend 或 null，但是 runArg 不是类数组时，会报错
  if (runArg && !isArrayLike(runArg)) {
    throw new TypeError('CreateListFromArrayLike called on non-object');
  }

  // 赋予函数属性
  context[func] = this;
  // 函数执行
  const result = runArg ? context[func](...runArg) : context[func]();
  // 删除临时函数属性
  Reflect.deleteProperty(context, func);

  return result;
}
