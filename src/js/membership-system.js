var __root = '../..';
var __config = __root + '/config';

var request = require( 'request' ),
	crypto = require( 'crypto' ),
	config = require( __config + '/config.json' );

var Membership = {
	validate: function ( tag, callback ) {
		callback( Math.round( Math.random() ) == 0 ? false : true );
	},
	hashCard: function ( id ) {
		var md5 = crypto.createHash( 'md5' );
		md5.update( config.tag_salt );
		md5.update( id.toLowerCase() );
		return md5.digest( 'hex' );
	}
};

module.exports = Membership;
