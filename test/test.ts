import test from 'ava';
import arrayFilterUnique from '../source';

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
		id: 1
	}, {
		name: 'B',
		id: 2
	}, {
		name: 'C',
		id: 1
	}, {
		name: 'D',
		id: 3
	}
];

test('with selector', t => {
	const result = testdata.filter(arrayFilterUnique(o => o.id));
	t.deepEqual(result, [
		{
			name: 'A',
			id: 1
		}, {
			name: 'B',
			id: 2
		}, {
			name: 'D',
			id: 3
		}
	]);
});
