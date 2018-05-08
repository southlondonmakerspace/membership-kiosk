var __root = __dirname;
var __config = __root + '/config/config.json';
var __static = __root + '/static';
var __src = __root + '/src';
var __views = __src + '/views';
var __js = __src + '/js';

var config = require( __config );
if (config.dev) {
	console.log("*** DEV MODE IS ON ***")
}
var express = require( 'express' ),
	helmet = require( 'helmet' ),
	flash = require( 'express-flash' ),
	fs = require('fs'),
	app = express(),
	https = require( 'https' ),
	http = require( 'http' )

if (config.ssl)
{
	var server = https.createServer({
		key: fs.readFileSync(config.ssl.key),
		cert: fs.readFileSync(config.ssl.cert)
	}, app);
} else {
	var server = http.createServer(app);
}


	var io = require( __js + '/socket' )( server ),
	nfc = require( __js + '/nfc' )( io ),
	bunyan = require('bunyan'),
	bunyanMiddleware = require('bunyan-middleware'),
	app_loader = require( __js + '/app-loader' );

// if in development mode, enable the test endpoints for simulating tags
if (config.dev)
{
	test = require( __js + '/test')( app, io );
}

// Bunyan logging
var requestLogger = bunyan.createLogger( {
	name: 'Membership-Kiosk',
	streams: [ {
		type: "rotating-file",
		path: "./access.log",
		period: '1d', // rotates every day
		count: 7 // keeps 7 days
	} ]
} );

app.use( bunyanMiddleware( { logger: requestLogger } ) );

// put socket.io in the app
app.set( 'io', io );

// Use helmet
app.use( helmet() );

console.log( "Starting..." );

// Setup static route
app.use( express.static( __static ) );

// Handle sessions
require( __js + '/sessions' )( app );

// Include support for notifications
app.use( flash() );
app.use( require( __js + '/quickflash' ) );

// Use PUG to render pages
app.set( 'views', __views );
app.set( 'view engine', 'pug' );
app.set( 'view cache', false );

// Load apps
app_loader( app );

// Start server
server.listen( config.port, function () {
	console.log( "Server started on: " + server.address().address + ':' + server.address().port );
} );
