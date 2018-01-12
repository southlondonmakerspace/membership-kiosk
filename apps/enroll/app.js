var __root = '../..';
var __src = __root + '/src';
var __js = __src + '/js';

var Membership = require(__js + "/membership-system")

var	express = require( 'express' ),
	app = express();

app.set( 'views', __dirname + '/views' );

app.get( '/:tagId', function ( req, res ) {
	res.render( 'index' );
} );

app.post( '/:tagId', function ( req, res ) {
	// send a linking email to the right email address
	Membership.enroll( req.params['tagId'], req.body.email, function (err) {
		if (!err)
		{
			res.render( 'enrolled' )
		} else {
			res.render( 'error', {error: err})
		}

	})
});


module.exports = function( config ) { return app; };
