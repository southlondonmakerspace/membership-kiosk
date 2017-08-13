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
	console.log(req.body.email)
	// send a linking email to the right email address
	Membership.enrollTag({tag: req.params['tagId'], email: req.body.email}, function (err, result) {
		if (result)
		{
			res.render( 'enrolled' )
		} else {
			res.render( 'error', {error: err})
		}

	})
});


module.exports = function( config ) { return app; };
