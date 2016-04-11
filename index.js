'use strict';
var condense = require('selective-whitespace');
var letterset = require('letterset');

module.exports = function (str) {
	if (typeof str !== 'string') {
		throw new TypeError('words-only expected a string');
	}

	var letters = letterset.allCharacters().join('');
	var regexp = new RegExp('[^' + letters + '\s\']+', 'gm');
	return condense(str.replace(regexp, ' '));
};
