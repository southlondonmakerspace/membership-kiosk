"use strict";

module.exports = function ( app , sio ) {
	var io = sio;
	app.get('/test/faketag/:tagId', function (req, res) {
		io.emit('card',req.params['tagId']);
		res.sendStatus(200);
	});
}
