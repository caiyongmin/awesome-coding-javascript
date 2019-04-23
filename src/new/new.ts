// Copyright 2019 caicloud authors. All rights reserved.

// test function
export const sum
  = (...a: number[]) =>
    a.reduce((acc, val) => acc + val, 0);
