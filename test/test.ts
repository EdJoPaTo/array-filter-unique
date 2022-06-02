import test from 'ava';
import {arrayFilterUnique} from '../source/index.js';

test('simple strings', t => {
	const data = ['a', 'b', 'a', 'c'];

	const result = data.filter(arrayFilterUnique());
	t.deepEqual(result, ['a', 'b', 'c']);
});

test('simple numbers', t => {
	const data = [1, 2, 1, 3];

	const result = data.filter(arrayFilterUnique());
	t.deepEqual(result, [1, 2, 3]);
});

test('simple numbers with selector', t => {
	const data = [1, 2, 1, 3];

	const result = data.filter(arrayFilterUnique(o => o));
	t.deepEqual(result, [1, 2, 3]);
});

const testdata = [
	{
		name: 'A',
		id: 1,
	}, {
		name: 'B',
		id: 2,
	}, {
		name: 'C',
		id: 1,
	}, {
		name: 'D',
		id: 3,
	},
];

test('with selector', t => {
	const result = testdata.filter(arrayFilterUnique(o => o.id));
	t.deepEqual(result, [
		{
			name: 'A',
			id: 1,
		}, {
			name: 'B',
			id: 2,
		}, {
			name: 'D',
			id: 3,
		},
	]);
});

test('hint user when not used as a function', t => {
	// This will not work in TypeScript but may be done accidentally in JS
	const data = ['a', 'b', 'a', 'c'];
	t.throws(() => {
		// @ts-expect-error typescript knows its not a function
		// eslint-disable-next-line unicorn/no-array-callback-reference
		data.filter(arrayFilterUnique);
	}, {message: /has to be called as a function/});
});
