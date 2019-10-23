import longestCommonSubStr from './../longestCommonSub';

describe('longestCommonSubStr', () => {
  it('no result', () => {
    const strs = ['abc', 'cbd'];
    const result = '';
    expect(longestCommonSubStr(strs)).toBe(result);
  });

  it('has result', () => {
    const strs = ['abc', 'abd'];
    const result = 'ab';
    expect(longestCommonSubStr(strs, result)).toEqual(result);
  });
});
