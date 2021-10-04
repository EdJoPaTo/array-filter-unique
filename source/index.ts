// See: https://jsperf.com/array-filter-unique/13
export default function arrayFilterUnique<T>(selector: (i: T) => string | number = o => String(o)): (element: T) => boolean {
	if (arguments.length > 1) {
		throw new Error('array-filter-unique has to be called as a function like `array.filter(arrayFilterUnique(<optional arg>))`');
	}

	const seen: Record<string | number, boolean> = {};
	return (element: T) => {
		const toBeSearched = selector(element);

		const isNew = !(toBeSearched in seen);
		seen[toBeSearched] = true;
		return isNew;
	};
}

// For CommonJS default export support
/* eslint-disable unicorn/prefer-module */
module.exports = arrayFilterUnique;
module.exports.default = arrayFilterUnique;
/* eslint-enable */
