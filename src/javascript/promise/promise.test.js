import Promise from './promise';
import sleep from './../../shared/sleep';

// ref: https://github.com/promises-aplus/promises-tests
describe('Promise', () => {
  const time = 500;
  it('take a function as an argument', () => {
    expect(() => {
      new Promise(1);
    }).toThrowError('is not a function');
  });

  it('return a promise instace, exposes the public API', () => {
    const promise = new Promise(function (resolve, reject) {
      +new Date() % 2 === 0 ? resolve() : reject();
    });
    expect(promise).toHaveProperty('then');
    expect(promise).toHaveProperty('catch');
    expect(promise).toHaveProperty('finally');
  });

  it('promise.then, onFulfilled', done => {
    const promise = new Promise(function (resolve) {
      setTimeout(function () {
        resolve(time);
      }, time);
    });
    promise.then(ms => {
      expect(ms).toBe(time);
      done();
    });
  });

  it('promise.then, onRejected', done => {
    const promise = new Promise(function (resolve, reject) {
      setTimeout(function () {
        reject(time);
      }, time);
    });
    promise.then(() => {
      // onFulfilled
    }, reason => {
      // onRejected
      expect(reason).toBe(time);
      done();
    });
  });

  it('promise.catch', done => {
    const promise = new Promise(function (resolve, reject) {
      setTimeout(function () {
        reject(time);
      }, time);
    });
    promise.then(() => {
      // onFulfilled
    }).catch(reason => {
      expect(reason).toBe(time);
      done();
    });
  });

  it('promise.finally', done => {
    const promise = new Promise(function (resolve, reject) {
      setTimeout(function () {
        reject(time);
      }, time);
    });
    promise.then(() => {
      // onFulfilled
    }).catch(() => {
      // onRejected
    }).finally(() => {
      // Finally
      expect(true).toBe(true);
      done();
    });
  });

  it('chain call, onFulfilled', done => {
    new Promise(function (resolve) {
      setTimeout(function () {
        resolve(time);
      }, time);
    }).then(ms => {
      return new Promise(function (resolve) {
        setTimeout(function () {
          resolve(ms + time);
        }, time);
      });
    }).then(total => {
      expect(total).toBe(time * 2);
      done();
    });
  });

  it('chain call, onRejected', done => {
    new Promise(function (resolve, reject) {
      setTimeout(function () {
        reject(time);
      }, time);
    }).then(ms => {
      return new Promise(function (resolve) {
        setTimeout(function () {
          resolve(ms + time);
        }, time);
      });
    }).then(total => {
      return new Promise(function (resolve) {
        setTimeout(function () {
          resolve(total + time);
        }, time);
      });
    }).catch(reason => {
      expect(reason).toBe(time);
      done();
    });
  });

  it('can only change status once, cannot from fulfilled to rejected', async () => {
    let result = '';
    const promise = new Promise(function (resolve, reject) {
      setTimeout(function () {
        resolve(time);
        setTimeout(function () {  // 设定之后再 reject 一次
          reject(time);
        }, 0);
      }, time);
    });
    promise.then(() => {
      result += '=fulfilled=';
    }).catch(() => {
      result += '=rejected=';
    });

    await sleep(2000);
    // 不等于 'fulfilled rejected'
    expect(result).not.toBe('=fulfilled==rejected=');
    // 等于 'fulfilled'
    expect(result).toBe('=fulfilled=');
  });

  it('can only change status once, cannot from rejected to fulfilled', async () => {
    let result = '';
    const promise = new Promise(function (resolve, reject) {
      setTimeout(function () {
        reject(time);
        setTimeout(function () {  // 设定之后再 resolve 一次
          resolve(time);
        }, 0);
      }, time);
    });
    promise.then(() => {
      result += '=fulfilled=';
    }).catch(() => {
      result += '=rejected=';
    });

    await sleep(2000);
    // 不等于 'fulfilled rejected'
    expect(result).not.toBe('=rejected==fulfilled=');
    // 等于 'rejected'
    expect(result).toBe('=rejected=');
  });

  it('Promise.resolve', done => {
    Promise.resolve(1).then(num => {
      expect(num).toBe(1);
      done();
    });
  });

  it('Promise.reject', done => {
    Promise.reject(1).catch(num => {
      expect(num).toBe(1);
      done();
    });
  });
});
