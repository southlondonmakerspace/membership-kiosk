var socket = io();

socket.on( 'bonjour', function() {
	console.log( 'Server said Bonjour!' );
} );

socket.on( 'hello', function() {
	console.log( 'Server said Hello!' );
} );

socket.on ( 'card', function (card) {
	console.log(card)
	$('div.splash p').text('Sweet!')
	$('div.splash').animate({'background-color': 'rgb(0,127,0);'},400,'swing',function () {
		$('div.splash').animate({'left':'-100%','right':'-100%'},400,'swing',function () {
			window.location.href ="/gateway/" + card
		})
	})
})

$(function() {
	$('body').hide().fadeIn(400);
	//$('body').css({'left':'-100%','right':'-100%'}).animate({'left':0,'right':0})
});
