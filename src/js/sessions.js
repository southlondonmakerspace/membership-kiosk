var __root = '../..';
var __config = __root + '/config/config.json';

var session = require( 'express-session' ),
	config = require( __config ),
	cookie = require('cookie-parser'),
	body = require( 'body-parser' ),
	csrf = require( 'csurf' );

module.exports =  function( app ) {
	app.use( cookie() );
	app.use( session( {
		name: config.session,
		secret: config.secret,
		cookie: config.cookie,
		saveUninitialized: false,
		resave: false,
		rolling: true
	} ) );

	// Form Body Parser
	app.use( body.urlencoded( { extended: true } ) );
	app.use( body.json() );

	// CSRF
	app.use( csrf() );

	app.use( function( req, res, next ) {
		res.locals.csrf= req.csrfToken();
		next();
	} );

	app.use( function( err, req, res, next ) {
		if ( err.code == 'EBADCSRFTOKEN' ) return res.sendStatus( 403 );
		next( err );
	} );
};
