var socket = io();

socket.on( 'bonjour', function() {
	console.log( 'Server said Bonjour!' );
} );

socket.on( 'hello', function() {
	console.log( 'Server said Hello!' );
} );

socket.on ( 'card', function (card) {
	console.log(card)
	// bing!
	var audioElement = document.createElement('audio');
	audioElement.setAttribute('src', '/sounds/chime_bell_ding.wav');
	audioElement.play()

	$('div.splash p').text('Sweet!')
	$('div.splash').animate({'background-color': 'rgb(0,127,0);'},300,'swing',function () {
		$('div.splash').animate({'left':'-100%','right':'-100%'},800,'swing',function () {
			window.location.href ="/gateway/" + card
		})
	})
})

$(function() {
	$('body').hide().fadeIn(400);
	setTimeout(function () {
		window.location.href = "/"
	},5*60*1000) // timeout after 5 minutes
	$('#enrollForm').submit(function (event) {
		event.preventDefault();
		$('.container').slideUp(800,function () {
			$('#enrollForm').off('submit').submit()
		})
	})
});
