var socket = io();

socket.on( 'bonjour', function() {
	console.log( 'Server said Bonjour!' );
} );

socket.on( 'hello', function() {
	console.log( 'Server said Hello!' );
} );

setInterval( function() {
	socket.emit( 'oi', { hello: 'world' } );
}, 2500 );
