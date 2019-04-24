export function isArrowFunction(func) {
  if (typeof func !== 'function') {
    return false;
  }

  const descriptors = Object.getOwnPropertyDescriptors(func);
  /**
   * function () {}
   * descriptors { length: {...}, name: {...}, prototype: {...} }
   * 
   * () => {}
   * descriptors { length: {...}, name: {...} }
   */
  if (!descriptors['prototype']) {
    return true;
  }

  return false;
}
