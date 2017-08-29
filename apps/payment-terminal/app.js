var __root = '../..';
var __src = __root + '/src';
var __js = __src + '/js';

var	express = require( 'express' ),
	app = express();

app.set( 'views', __dirname + '/views' );

app.get('/', function (req, res) {
	res.render('index', {bank: {account: '123456', sort: '01-23-45'}})
});

app.get('/callback', function (req, res ) {
	console.log( req.query );
	req.app.get( 'io' ).emit( 'paymentcomplete', req.query );
	res.redirect( '/payment-terminal' );
})

module.exports = function( config ) { return app; };
