import convertDecimalToBinary from './convertDecimalToBinary';

describe('convertDecimalToBinary', () => {
  it('convert decimal to binary', () => {
    expect(convertDecimalToBinary(2)).toBe('10');
    expect(convertDecimalToBinary(5)).toBe('101');
  });

  it('convert decimal to binary, not a number', () => {
    expect(convertDecimalToBinary({})).toBe('');
  });
});
