import { thousands1, thousands2 } from './thousands';

describe('three sum', () => {
  it('no result', () => {
    const num = {};
    const result = '';
    expect(thousands1(num)).toEqual(result);
    expect(thousands2(num)).toEqual(result);
  });

  it('has result', () => {
    const num = 1234;
    const result = '1,234';
    expect(thousands1(num)).toEqual(result);
    expect(thousands2(num)).toEqual(result);
  });
});
