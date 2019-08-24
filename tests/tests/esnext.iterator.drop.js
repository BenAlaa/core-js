import { createIterator } from '../helpers/helpers';

QUnit.test('Iterator#drop', assert => {
  const { drop } = Iterator.prototype;

  assert.isFunction(drop);
  assert.arity(drop, 1);
  assert.name(drop, 'drop');
  assert.looksNative(drop);
  assert.nonEnumerable(Iterator.prototype, 'drop');

  assert.arrayEqual(drop.call(createIterator([1, 2, 3]), 1).toArray(), [2, 3], 'basic functionality');

  assert.throws(() => drop.call(undefined, 1), TypeError);
  assert.throws(() => drop.call(null, 1), TypeError);
  assert.throws(() => drop.call({}, 1), TypeError);
  assert.throws(() => drop.call([], 1), TypeError);
});
