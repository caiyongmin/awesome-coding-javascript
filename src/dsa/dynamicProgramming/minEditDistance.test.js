import minEditDistance from './minEditDistance';

describe('minEditDistance', () => {
  it('min edit distance, str1 is empty', () => {
    const str1 = '';
    const str2 = 'abd';
    const result = 3;
    expect(minEditDistance(str1, str2)).toBe(result);
  });

  it('min edit distance, str2 is empty', () => {
    const str1 = 'abc';
    const str2 = '';
    const result = 3;
    expect(minEditDistance(str1, str2)).toBe(result);
  });

  it('min edit distance', () => {
    const str1 = 'abc';
    const str2 = 'cbd';
    const result = 2;
    expect(minEditDistance(str1, str2)).toBe(result);
  });
});
