import { deepStrictEqual, throws } from "node:assert";
import { test } from "node:test";
import { arrayFilterUnique } from "./mod.ts";

test("simple strings", () => {
	const data = ["a", "b", "a", "c"];

	const result = data.filter(arrayFilterUnique());
	deepStrictEqual(result, ["a", "b", "c"]);
});

test("simple numbers", () => {
	const data = [1, 2, 1, 3];

	const result = data.filter(arrayFilterUnique());
	deepStrictEqual(result, [1, 2, 3]);
});

test("simple numbers with selector", () => {
	const data = [1, 2, 1, 3];

	const result = data.filter(arrayFilterUnique((o) => o));
	deepStrictEqual(result, [1, 2, 3]);
});

const testdata = [
	{
		name: "A",
		id: 1,
	},
	{
		name: "B",
		id: 2,
	},
	{
		name: "C",
		id: 1,
	},
	{
		name: "D",
		id: 3,
	},
] as const;

test("with selector", () => {
	const result = testdata.filter(arrayFilterUnique((o) => o.id));
	deepStrictEqual(result, [
		{
			name: "A",
			id: 1,
		},
		{
			name: "B",
			id: 2,
		},
		{
			name: "D",
			id: 3,
		},
	]);
});

test("hint user when not used as a function", () => {
	// This will not work in TypeScript but may be done accidentally in JS
	const data = ["a", "b", "a", "c"];
	throws(() => {
		// @ts-expect-error typescript knows its not a function
		data.filter(arrayFilterUnique);
	}, { message: /has to be called as a function/ });
});
