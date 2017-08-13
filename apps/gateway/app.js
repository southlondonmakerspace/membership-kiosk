"use strict";


var __root = '../..';
var __src = __root + '/src';
var __js = __src + '/js';
var Membership = require(__js + "/membership-system")
var	express = require( 'express' ),
	app = express();


app.get( '/:tokenId', function ( req, res ) {
	console.log("Gateway for " + req.params['tokenId']);
	Membership.validate(req.params['tokenId'], function (result) {
		if (result)
		{
			res.redirect('/menu/' + req.params['tokenId']);
		} else {
			res.redirect('/enroll/' + req.params['tokenId']);
		}
	})
} );

module.exports = function( config ) { return app; };
