import getFunction from '../functions.js';

const get = getFunction();

// BEGIN (write your solution here)
if (get({key: 'value'}, 'key') !== 'value'){
  throw new Error ('ошибочка')
}
if (get({}, 'key', 'defaultValue') !== 'defaultValue') {
  throw new Error('ошибочка')
}
if (get({ key: 'value' }, 'key', 'defaultValue') !== 'value') {
  throw new Error('ошибочка')
} 
// END