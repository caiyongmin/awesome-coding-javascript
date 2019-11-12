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
      // 开始时间复位
      startTime = curTime;
      func.apply(this, args);
    }
  };
}
