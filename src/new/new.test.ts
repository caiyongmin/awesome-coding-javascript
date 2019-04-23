// Copyright 2019 caicloud authors. All rights reserved.

import { sum } from './new';

describe('create new function', () => {
  it('create', () => {
    expect(sum(0)).toBe(0);
  });
});