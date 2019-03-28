import test from 'ava';
import arrayFilterUnique from '../source';

test('simple', t => {
	const data = ['a', 'b', 'a', 'c'];

	const result = data.filter(arrayFilterUnique());
	t.deepEqual(result, ['a', 'b', 'c']);
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
