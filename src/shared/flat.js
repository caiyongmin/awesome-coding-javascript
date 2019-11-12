export function getArrFlat(arr) {
  return arr.reduce((target, item) => {
    if (Array.isArray(item)) {
      return [...target, ...getArrFlat(item)];
    }
    return [...target, item];
  }, []);
}
