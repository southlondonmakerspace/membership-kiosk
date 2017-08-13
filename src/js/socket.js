var __home = __dirname + '/../..';
var __src = __home + '/src';
var __js = __src + '/js';
var __views = __src + '/views';

var sio = require( 'socket.io' );

module.exports = function( server ) {
	var io = sio.listen( server );

	io.on( 'connection', connected );

	setInterval( function() {
		console.log( 'saying bonjour!' );
		io.emit( 'bonjour' );
	}, 1000 );

	return io;
};

function connected( socket ) {
	console.log( 'someone connected' );
	socket.emit( 'hello' );
	socket.on( 'oi', function( message ) {
		console.log( 'oi:' );
		console.log( message );
		// socket.request.user
	} );
}
