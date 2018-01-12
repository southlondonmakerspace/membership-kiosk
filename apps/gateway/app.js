"use strict";


var __root = '../..';
var __src = __root + '/src';
var __js = __src + '/js';
var Membership = require(__js + "/membership-system")
var	express = require( 'express' ),
	app = express();


app.get( '/:tokenId', function ( req, res ) {
	Membership.validate(req.params['tokenId'], function (result) {
		if (!result.valid)
		{
			res.redirect('/enroll/' + result.tag);
		} else {
			res.redirect('/menu/' + result.hash);
		}
	})
} );

module.exports = function( config ) { return app; };
