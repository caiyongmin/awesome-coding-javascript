export default class Promise {
  constructor(fn) {
    // 记录 promise 的状态，根据状态来操作 callbacks 队列
    this.state = 'pending';
    // 记录 resolve 或 reject 时的值
    this.value = null;
    // 里面维护了一个队列，是 resolve 时要执行的代码
    this.callbacks = [];

    fn(this.resolve, this.reject);
  }

  static resolve = val => {
    return new Promise(function (resolve) {
      resolve(val);
    });
  }

  static reject = reason => {
    return new Promise(function (resolve, reject) {
      reject(reason);
    });
  }

  static stop = () => {
    return new Promise(function () {});
  }

  // 注册 onFulfilled 和 onRejected 函数
  then = (onFulfilled, onRejected) => {
    return new Promise((resolve, reject) => {
      this.handle({
        onFulfilled: onFulfilled || null,
        onRejected: onRejected || null,
        resolve,
        reject,
      });
    });
  }

  catch = onRejected => {
    return this.then(null, onRejected);
  }

  finally = onFinally => {
    onFinally = typeof onFinally === 'function' ? onFinally : function noop() {};

    return this.then(
      val => Promise.resolve(onFinally()).then(() => val),
      reason => Promise.resolve(onFinally()).then(() => {
        throw reason;
      })
    );
  }

  // 更改状态，调用执行 callbacks 的方法
  resolve = val => {
    // 状态只能更改一次
    if (this.state !== 'pending') {
      return;
    }

    // resolve 的值是 Promise 的情况
    if (val && (typeof val === 'function' || typeof val === 'object')) {
      const then = val.then;
      if (typeof then === 'function') {
        then.call(val, this.resolve, this.reject);
        return;
      }
    }

    this.state = 'fulfilled';
    this.value = val;
    this.execute();
  }

  reject = reason => {
    // 状态只能更改一次
    if (this.state !== 'pending') {
      return;
    }

    this.state = 'rejected';
    this.value = reason;
    this.execute();
  }

  // 执行 callbacks
  execute = () => {
    setTimeout(() => {
      this.callbacks.forEach(callback => {
        this.handle(callback);
      });
    }, 0);
  }

  // 负责处理单个 callback
  handle = callback => {
    if (this.state === 'pending') {
      this.callbacks.push(callback);
      return;
    }

    if (this.state === 'fulfilled') {
      // 如果 then 中没有传递任何东西
      if (!callback.onFulfilled) {
        // 直接执行下一个 promise
        callback.resolve(this.value);
        return;
      }

      try {
        // 执行当前的 promise
        const ret = callback.onFulfilled(this.value);
        // 执行下一个 promise
        callback.resolve(ret);
      }
      catch (err) {
        callback.reject(err);
      }
      return;
    }

    if (this.state === 'rejected') {
      // 如果没有指定 callback.onRejected
      if (!callback.onRejected) {
        callback.reject(this.value);
        return;
      }

      try {
        const ret = callback.onRejected(this.value);
        callback.resolve(ret);
      }
      catch (err) {
        callback.reject(err);
      }
      return;
    }
  }
}
