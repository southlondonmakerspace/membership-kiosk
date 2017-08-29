var __root = '../..';
var __src = __root + '/src';
var __js = __src + '/js';

var config = require( __root + '/config/config.json' );

var	express = require( 'express' ),
	app = express();

app.set( 'views', __dirname + '/views' );

app.get('/', function (req, res) {
	res.render('index', {bank: {account: '123456', sort: '01-23-45'}});
});

app.get('/pick', function (req, res) {
	res.render('pick');
});

app.get('/donate', function (req, res) {
	if (config.squarepay && req.query.amount)
	{
		var payment = {
			total_amount: req.query.amount,
			currency_code: config.squarepay.currency,
			fallback_url: config.audience + "/payment-terminal",
			callback_url: config.audience + "/payment-terminal/callback",
			client_id: config.squarepay.client_id
		}
		console.log( payment );
		req.app.get('io').emit('payment', payment);
	}

	res.render('waittocomplete')
});

module.exports = function( config ) { return app; };
