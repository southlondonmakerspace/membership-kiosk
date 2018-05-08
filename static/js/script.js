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
	$('#secondsLeft').hide()
	if (window.location.pathname != "/")
	{
		var totalSeconds = 25
		var countdown = totalSeconds

		function checkTimeout()
		{
			countdown--
			console.log(countdown)
			if (countdown <= 0)
			{
				// countdown is over! redirect home
				window.location.href = "/"
			} else {
				if (countdown <= 15)
				{ // less than 15 seconds to go
					if (countdown == 15)
					{
						$('#secondsLeft').slideDown()
					}
					$('#secondsLeft').text(countdown + ' seconds left (touch the screen to cancel!)')
					if (countdown < 5)
					{
						$('#secondsLeft').animate({'background-color': 'rgb(255,0,0);'},100,'swing', function() {
							$('#secondsLeft').animate({'background-color': 'rgb(0,0,0);'},300,'swing')
						})
					}
				} else {
					$('#secondsLeft').text('').hide()
				}
			}
		}
		function resetCountdown() {
			countdown = totalSeconds
		}
		$('body').on('mousemove', function () {
			// reset the countdown
			resetCountdown()
		})
		$('body').on('click', function () {
			resetCountdown()
			return true
		})
		$('body').on('keypress', function () {
			resetCountdown()
			return true
		})
		setInterval(checkTimeout,1000)

	}

	$('#enrollForm').submit(function (event) {
		event.preventDefault();
		$('.container').slideUp(800,function () {
			$('#enrollForm').off('submit').submit()
		})
	})
});
