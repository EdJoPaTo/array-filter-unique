// See: https://jsperf.com/array-filter-unique/13
export default function arrayFilterUnique<T>(selector: (i: T) => string | number = o => String(o)): (element: T) => boolean {
	const seen: {[key: string]: boolean} = {};
	return (element: T) => {
		const toBeSearched = selector(element);

		const isNew = !(toBeSearched in seen);
		seen[toBeSearched] = true;
		return isNew;
	};
}

// For CommonJS default export support
module.exports = arrayFilterUnique;
module.exports.default = arrayFilterUnique;
