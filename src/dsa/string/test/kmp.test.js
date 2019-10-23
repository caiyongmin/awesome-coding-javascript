import kmp from './../kmp';

describe('kmp', () => {
  it('no result', () => {
    const sourceStr = 'abc';
    const subStr = 'cb';
    const result = -1;
    expect(kmp(sourceStr, subStr)).toBe(result);
  });

  it('has result', () => {
    const sourceStr = 'abcdabcbcabcdabd';
    const subStr = 'abcdabd';
    const result = 9;
    expect(kmp(sourceStr, subStr)).toBe(result);
  });
});
