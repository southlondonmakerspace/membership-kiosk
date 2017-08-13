var __root = '../..';
var __src = __root + '/src';
var __js = __src + '/js';
var __config = __root + '/config';

var config = require( __config + '/config.json' );

function templateLocals( req, res, next ) {
	next();
}

module.exports = function( a ) {
	apps = a;
	return templateLocals;
};
