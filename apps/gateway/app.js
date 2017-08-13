"use strict";


var __root = '../..';
var __src = __root + '/src';
var __js = __src + '/js';
var Membership = require(__js + "/membership-system")
var	express = require( 'express' ),
	app = express();


app.get( '/:tokenId', function ( req, res ) {
	console.log("Gateway for " + req.params['tokenId']);
	Membership.validate(req.params['tokenId'], function (result, tag) {
		if (!result.valid)
		{
			res.redirect('/enroll/' + result.tag);
		} else {
			res.redirect('/menu/' + result.hash);
		}
	})
} );

module.exports = function( config ) { return app; };
