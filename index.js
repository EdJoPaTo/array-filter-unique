'use strict';

// See: https://jsperf.com/array-filter-unique/13
module.exports = function (selector = o => o) {
	const seen = {};
	return element => {
		const toBeSearched = selector(element);

		const isNew = !(toBeSearched in seen);
		seen[toBeSearched] = 1;
		return isNew;
	};
};
