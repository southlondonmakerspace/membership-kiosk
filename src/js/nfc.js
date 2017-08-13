"use strict";

// #############
// Example from "Reading and writing data" section of project's README
// #############

const NFC = require('nfc-pcsc').NFC;

var io;


module.exports =  function( sio ) {
	io = sio;
	const nfc = new NFC();

	nfc.on('reader', function(reader) {

		console.log(`${reader.reader.name}  device attached`);

		reader.on('card', function (card) {

			console.log(`card detected`, card);
			io.emit('card', card.uid);

		});

		reader.on('error', function (err) {
			console.log(`${reader.reader.name}  an error occurred`, err);
		});

		reader.on('end', function () {
			console.log(`${reader.reader.name}  device removed`);
		});

	});

	nfc.on('error', function (err) {
		console.log('an error occurred', err);
	});
}
