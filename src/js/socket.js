var __home = __dirname + '/../..';
var __src = __home + '/src';
var __js = __src + '/js';
var __views = __src + '/views';

var sio = require( 'socket.io' );

module.exports = function( server ) {
	var io = sio.listen( server );

	io.on( 'connection', connected );

	return io;
};

function connected( socket ) {
}
