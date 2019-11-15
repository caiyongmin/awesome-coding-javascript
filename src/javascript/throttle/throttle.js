/**
 * 节流
 * @param {Function} func 执行函数
 * @param {Number} interval 间隔
 */
export default function throttle(func, interval) {
  let startTime = new Date();

  return function (...args) {
    const curTime = new Date();
    // 大于间隔时才执行函数的逻辑
    if (curTime - startTime > interval) {
      // 重设开始时间
      startTime = curTime;
      // 执行函数
      func.apply(this, args);
    }
  };
}
