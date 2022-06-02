// See: https://jsperf.com/array-filter-unique/13
export function arrayFilterUnique<T>(
	selector: (i: T) => string | number = String,
): (element: T) => boolean {
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
