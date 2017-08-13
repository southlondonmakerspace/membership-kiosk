var socket = io();

socket.on( 'bonjour', function() {
	console.log( 'Server said Bonjour!' );
} );

socket.on( 'hello', function() {
	console.log( 'Server said Hello!' );
} );

socket.on ( 'card', function (card) {
	console.log(card)
	window.location.href ="/gateway/" + card
})
setInterval( function() {
	socket.emit( 'oi', { hello: 'world' } );
}, 2500 );
