export function asyncGenerator(fn) {
  return function () {
    const gen = fn.apply(this, arguments);

    return new Promise(function(resolve, reject) {
      function step(result) {
        try {
          if (result.done) {
            return resolve(result.value);
          }
          Promise.resolve(result.value)
            .then(val => step(gen.next(val)))
            .catch(err => step(gen.throw(err)));
        }
        catch(e) {
          return reject(e);
        }
      }
      // 递归地一步一步执行 gen.next()
      step(gen.next());
    });
  };
}
