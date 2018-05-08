var socket = io();

socket.on( 'hello', function() {
	console.log( 'Server said Hello!' );
} );

function addButton(intent) {
	$('<a>', {
		class: 'btn btn-primary',
		text: 'Press me to Pay',
		href: intent
	}).appendTo('.container')
}

function showPayment(payment)
{
	var intent = "intent:#Intent;action=com.squareup.pos.action.CHARGE;package=com.squareup;S.browser_fallback_url=" + payment.fallback_url + ";S.com.squareup.pos.WEB_CALLBACK_URI=" + payment.callback_url + ";S.com.squareup.pos.CLIENT_ID=" + payment.client_id + ";S.com.squareup.pos.API_VERSION=v2.0;i.com.squareup.pos.TOTAL_AMOUNT=" + payment.total_amount + ";S.com.squareup.pos.CURRENCY_CODE=" + payment.currency_code + ";S.com.squareup.pos.TENDER_TYPES=com.squareup.pos.TENDER_CARD;end"
	$('.container').html('<h1>Accepting payment </h1><h2>for ' + (payment.total_amount / 100) + ' ' + payment.currency_code + '</h2>')
	addButton(intent);
}

socket.on ( 'payment', function (payment) {
	console.log(payment)
	// bing!
	var audioElement = document.createElement('audio');
	audioElement.setAttribute('src', '/sounds/beep_short_on.wav');
	audioElement.play();
	// add the button with the pay Intent
	showPayment(payment);
})


$(function() {
	$('body').hide().fadeIn(400);
});
