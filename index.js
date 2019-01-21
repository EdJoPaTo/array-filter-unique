'use strict';

// See: https://stackoverflow.com/questions/13486479/how-to-get-an-array-of-unique-values-from-an-array-containing-duplicates-in-java
module.exports = function (selector = o => o, last = false) {
	return (element, index, array) => {
		const mapped = array
			.map(selector);
		const toBeSearched = selector(element);

		if (last) {
			return mapped.lastIndexOf(toBeSearched) === index;
		}

		return mapped.indexOf(toBeSearched) >= index;
	};
};
