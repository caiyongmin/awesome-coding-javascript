import deepclone from './deepclone';

describe('deepclone', () => {
  it('clone plain object', () => {
    const target = {
      num: 1,
      boolean: true,
      null: null,
      str: 'str',
      undefined: undefined,
      symbol: Symbol('symbol'),
      obj: {
        c: 'c',
      },
      arr: [ 1, 2, 3 ],
    };

    const cloneTarget = deepclone(target);
    expect(target).toEqual(cloneTarget);
    cloneTarget.obj.c = 's';
    expect(target.obj.c).toBe('c');
    expect(cloneTarget.obj.c).toBe('s');
  });

  it('when it has object reference', () => {
    const target = {
      obj: {
        c: 'c',
      },
      arr: [ 1, 2, 3 ],
    };
    // 循环引用
    target.target = target;

    const cloneTarget = deepclone(target);
    expect(target).toEqual(cloneTarget);
  });

  it('clone function', () => {
    const target = {
      obj: {
        c: 'c',
      },
      arr: [ 1, 2, 3 ],
      func1: () => {
        console.log('target');
      },
      func2: function (a, b) {
        return a + b;
      },
    };
    const cloneTarget = deepclone(target);
    expect(target).toEqual(cloneTarget);
  });

  it('clone other type, for example: set and map', () => {
    const set = new Set();
    set.add('val1');
    set.add('val2');
    const map = new Map();
    map.set('key1', 'val1');
    map.set('key2', 'val2');
    const target = { map, set };

    const cloneTarget = deepclone(target);
    expect(target).toEqual(cloneTarget);

    cloneTarget.set.add('val3');
    expect(target.set.has('val3')).toBe(false);
    expect(cloneTarget.set.has('val3')).toBe(true);

    cloneTarget.map.set('key3', 'val3');
    expect(target.map.has('key3')).toBe(false);
    expect(cloneTarget.map.has('key3')).toBe(true);
  });
});
