import { jumpFloor, jumpFloorNR } from './jumpFloor';

describe('jump floor', () => {
  it('jump floor recursion', () => {
    expect(jumpFloor(1)).toBe(1);
    expect(jumpFloor(2)).toBe(2);
    expect(jumpFloor(3)).toBe(3);
    expect(jumpFloor(4)).toBe(5);
    expect(jumpFloor(5)).toBe(8);
  });

  it('jump floor non-recursion', () => {
    expect(jumpFloorNR(1)).toBe(1);
    expect(jumpFloorNR(2)).toBe(2);
    expect(jumpFloorNR(3)).toBe(3);
    expect(jumpFloorNR(4)).toBe(5);
    expect(jumpFloorNR(5)).toBe(8);
  });
});
