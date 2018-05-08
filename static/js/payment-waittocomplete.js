var socket = io();

socket.on( 'paymentcomplete', function(paymentcomplete) {
	console.log( paymentcomplete );
	if (paymentcomplete['com.squareup.pos.ERROR_CODE'])
	{
		console.error(paymentcomplete['com.squareup.pos.ERROR_DESCRIPTION']);
		$('.result').html("<h2>Whoops... there was an error</h2><p>The error reported was: " + paymentcomplete['com.squareup.pos.ERROR_DESCRIPTION'] + '</p>');
		$('.result').append($('<a href="/payment">Go back</a>'));
	} else {
		console.log(paymentcomplete['com.squareup.pos.CLIENT_TRANSACTION_ID'])
		$('.result').html("<h2>Great, thanks!</h2><p>Sending you back now...</p>")
		setTimeout(function () { window.location = "/payment" },5000)
	}
} );
