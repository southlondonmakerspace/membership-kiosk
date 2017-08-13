var __root = '../..';
var __src = __root + '/src';
var __js = __src + '/js';
var Membership = require(__js + "/membership-system")

var	express = require( 'express' ),
	app = express();

app.set( 'views', __dirname + '/views' );

app.get( '/:hashId', function ( req, res ) {
	Membership.identify(req.params['hashId'], function (identity) {
		res.render( 'index' , {identity: identity} );
	});
} );

module.exports = function( config ) { return app; };
