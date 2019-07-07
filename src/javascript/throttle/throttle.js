/**
 * 节流
 * @param {Function} func 执行函数
 * @param {Number} interval 间隔
 */
export default function throttle(func, interval) {
  let startTime = new Date();

  return function (...args) {
    const curTime = new Date();
    if (curTime - startTime > interval) {
      startTime = curTime;
      func.apply(this, args);
    }
  };
}