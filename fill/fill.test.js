



// BEGIN (write your solution here)
let array;

beforeEach(() => {
  array = [1, 2, 3, 4];
});

test('fillitout', () => {


  const actual = fill(array, '*', 1, 3);
  expect(actual).toEqual([1, '*', '*', 4]);
});
  test('fillitout1', () => {
  const actual1 = fill(array, '*');
  expect(actual1).toEqual(['*', '*', '*', '*']);
  });
  test('fillitout2', () => {
  const actual2 = fill(array, '*', 4);
  expect(actual2).toEqual([1, 2, 3, 4]);
  });
  test('fillitout3', () => {
  const actual3 = fill(array, '*', 0, 10);
  expect(actual3).toEqual(['*', '*', '*', '*']);
});
// END