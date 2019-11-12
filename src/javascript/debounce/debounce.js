/**
 * 防抖
 * @param {Function} func 要执行的函数
 * @param {Number} interval 时间间隔
 * @param {Boolean} immediate 是否立即执行，也就是前置防抖
 */
export default function debounce(func, interval, immediate) {
  let timer = null;
  return function () {
    let args = arguments;
    let context = this;

    const needCallNow = immediate && !timer;

    clearTimeout(timer);
    timer = setTimeout(() => {
      timer = null;
      // 后置防抖
      if (!immediate) {
        func.apply(context, args);
      }
    }, interval);

    // 前置防抖
    if (needCallNow) {
      func.apply(context, args);
    }
  };
}

export function debounceTimer(event, time) {
  let timer = null;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      event.apply(this, args);
    }, time);
  };
}
