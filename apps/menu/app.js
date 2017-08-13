var __root = '../..';
var __src = __root + '/src';
var __js = __src + '/js';

var	express = require( 'express' ),
	app = express();

app.set( 'views', __dirname + '/views' );

app.get( '/:hashId', function ( req, res ) {
	res.render( 'index' );
} );

module.exports = function( config ) { return app; };
