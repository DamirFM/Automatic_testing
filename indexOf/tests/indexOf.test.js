// @ts-check

import assert from 'power-assert';
// @ts-ignore
import getFunction from '../functions.js';

const indexOf = getFunction();

// BEGIN (write your solution here)
assert(indexOf([1, 2, 1, 2], 2) === 1);
assert(indexOf([], 9) === -1);
assert(indexOf(['one', 'two', 8], 'one') === 0);
assert(indexOf([1, 2, 1, 2], 2, 2) === 3);
// END