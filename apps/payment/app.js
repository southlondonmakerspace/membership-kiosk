var __root = '../..';
var __src = __root + '/src';
var __js = __src + '/js';

var config = require( __root + '/config/config.json' );

var	express = require( 'express' ),
	app = express();

app.set( 'views', __dirname + '/views' );

app.get('/', function (req, res) {
	res.render('index', {bank: {account: '123456', sort: '01-23-45'}})
});

app.get('/squaretest', function (req, res) {
	if (config.squarepay)
	{
		req.app.get('io').emit('payment', {
			total_amount: 1337,
			currency_code: config.squarepay.currency,
			fallback_url: config.audience + "/payment-terminal",
			callback_url: config.audience + "/payment-terminal/callback",
			client_id: config.squarepay.client_id
		});
	}

	res.render('squaretest')
});

module.exports = function( config ) { return app; };
