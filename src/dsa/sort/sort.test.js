import bubbleSort from './bubbleSort';
import selectionSort from './selectionSort';
import insertSort from './insertSort';
import quickSort from './quickSort';
import mergeSort from './mergeSort';

describe('sort array', () => {
  const result = [1, 2, 3, 4, 5];
  let arr;

  beforeEach(() => {
    arr = [2, 5, 1, 3, 4];
  });

  it('bubbleSort', () => {
    expect(bubbleSort(arr)).toEqual(result);
  });

  it('selectionSort', () => {
    expect(selectionSort(arr)).toEqual(result);
  });

  it('insertSort', () => {
    expect(insertSort(arr)).toEqual(result);
  });

  it('quickSort', () => {
    expect(quickSort(arr)).toEqual(result);
  });

  it('mergeSort', () => {
    expect(mergeSort(arr)).toEqual(result);
  });
});

describe('sort array, throw error', () => {
  const result = /1 is not an array./;
  let arr;

  beforeEach(() => {
    arr = 1;
  });

  it('bubbleSort, throw error', () => {
    expect(() => bubbleSort(arr)).toThrow(result);
  });

  it('selectionSort, throw error', () => {
    expect(() => selectionSort(arr)).toThrow(result);
  });

  it('insertSort, throw error', () => {
    expect(() => insertSort(arr)).toThrow(result);
  });

  it('quickSort, throw error', () => {
    expect(() => quickSort(arr)).toThrow(result);
  });

  it('mergeSort, throw error', () => {
    expect(() => mergeSort(arr)).toThrow(result);
  });
});
