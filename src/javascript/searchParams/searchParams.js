export default class SearchParams {
  constructor(params) {
    if (typeof params === 'string') {
      params = this.parseStringParams(params);
    }
    else if (typeof params === 'object' && params !== null) {
      const paramsArr = Object.keys(params).map(key => ([key, params[key]]));
      params = new Map(paramsArr);
    }
    else {
      params = new Map();
    }

    this.params = params;
  }

  parseStringParams = str => {
    const result = new Map();

    if (!str) {
      return result;
    }

    str.split('&').forEach(item => {
      if (item) {
        const [ key, value = '' ] = item.split('=');
        if (result.has(key)) {
          let initVal = result.get(key);
          initVal = Array.isArray(initVal) ? initVal : [initVal];
          initVal.push(decodeURIComponent(value));
          result.set(key, initVal);
        }
        else {
          result.set(key, decodeURIComponent(value));
        }
      }
    });

    return result;
  }

  get = (...args) => {
    if (!args.length) {
      throw new TypeError(
        'Failed to execute \'get\' on \'URLSearchParams\':'
        + '1 arguments required, but only 0 present.'
      );
    }

    const key = args[0];
    let val = this.params.get(key);
    if (val === null || val === undefined) {
      val = null;
    }
    else {
      val = Array.isArray(val) ? val[0] : val;
      val = decodeURIComponent(val);
    }

    return val;
  }

  getAll = (...args) => {
    if (!args.length) {
      throw new TypeError(
        'Failed to execute \'getAll\' on \'URLSearchParams\':'
        + '1 arguments required, but only 0 present.'
      );
    }

    const key = args[0];
    let val = this.params.get(key);
    if (val === undefined) {
      val = [];
    }
    else {
      val = Array.isArray(val) ? val : [val];
      val = val.map(v => decodeURIComponent(v));
    }

    return val;
  }

  set = (...args) => {
    if (args.length === 0) {
      throw new TypeError(
        'Failed to execute \'set\' on \'URLSearchParams\':'
        + '2 arguments required, but only 0 present.'
      );
    }

    if (args.length === 1) {
      throw new TypeError(
        'Failed to execute \'set\' on \'URLSearchParams\':'
        + '2 arguments required, but only 1 present.'
      );
    }

    const key = args[0];
    let value = args[1];
    value = decodeURIComponent(value);
    this.params.set(key, value);
  }

  append = (...args) => {
    if (args.length === 0) {
      throw new TypeError(
        'Failed to execute \'append\' on \'URLSearchParams\':'
        + '2 arguments required, but only 0 present.'
      );
    }

    if (args.length === 1) {
      throw new TypeError(
        'Failed to execute \'append\' on \'URLSearchParams\':'
        + '2 arguments required, but only 1 present.'
      );
    }

    const key = args[0];
    let value = args[1];
    value = String(value);
    if (this.params.has(key)) {
      let initVal = this.params.get(key);
      initVal = Array.isArray(initVal) ? initVal : [initVal];
      initVal.push(value);
      this.params.set(key, initVal);
    }
    else {
      this.params.set(key, value);
    }
  }

  has = (...args) => {
    if (!args.length) {
      throw new TypeError(
        'Failed to execute \'has\' on \'URLSearchParams\':'
        + '1 arguments required, but only 0 present.'
      );
    }

    const key = args[0];
    return this.params.has(key);
  }

  toString = () => {
    const resultArr = [];
    // eslint-disable-next-line no-unused-vars
    for (let [ key, value ] of this.params.entries()) {
      if (Array.isArray(value)) {
        value.forEach(v => {
          resultArr.push(`${key}=${encodeURIComponent(v)}`);
        });
      }
      else {
        resultArr.push(`${key}=${encodeURIComponent(value)}`);
      }
    }

    return resultArr.join('&');
  }

  [Symbol.iterator] = () => {
    const paramsKeys = [...this.params.keys()];
    const paramsKeysLen = paramsKeys.length;
    let index = 0;
    let innerIndex = 0;

    return {
      next: () => {
        if (index < paramsKeysLen) {
          // process one key match more values
          const paramKey = paramsKeys[index];
          const paramValue =  this.getAll(paramKey);
          // 1. get value
          const value = paramValue[innerIndex];
          // 2. process index and innerIndex
          if (innerIndex + 1 === paramValue.length) {
            index = index + 1;  // index add 1, iterate next value
            innerIndex = 0;  // reset innerIndex
          }
          else {
            innerIndex = innerIndex + 1;
          }
          // 3. set the return iterator value at the end
          return { value: [paramKey, value] };
        }

        return { done: true };
      }
    };
  }
}
