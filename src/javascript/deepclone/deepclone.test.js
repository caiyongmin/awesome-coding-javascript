import deepclone from './deepclone';

describe('deepclone test cases', () => {
  it('deepclone object', () => {
    const obj = {
      x: {
        y: {
          z: 0
        }
      }
    };
    const newObj = deepclone(obj);
    newObj.x.y.z = 1;

    expect(obj.x.y.z).toBe(0);
    expect(newObj.x.y.z).toBe(1);
  });
});
