export default function currify(fn) {
  if (typeof fn !== 'function') {
    throw new Error('fn must be a function');
  }

  const reducer = (...args) => {
    // 注意 fn 函数的参数个数可能为 0
    if (args.length >= fn.length) {
      return fn(...args);
    }
    return (...lastArgs) => reducer(...args, ...lastArgs);
  };

  return reducer;
}
