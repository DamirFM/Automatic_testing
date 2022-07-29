import { strict as assert } from 'assert';
import getFunction from '../functions.js';

const take = getFunction();


assert.deepStrictEqual(take(['one', 'two', 'three'], 2), ['one', 'two']);
assert.deepStrictEqual(take(['one', 'two', 8], 9), ['one', 'two', 8]);
assert.deepStrictEqual(take([1, 2]), [1]);
assert.deepStrictEqual(take([]), []);
assert.deepStrictEqual(take([4, 3], -1), []);
