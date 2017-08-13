var __root = '../..';
var __config = __root + '/config';

var request = require( 'request' ),
	crypto = require( 'crypto' ),
	config = require( __config + '/config.json' );

var Membership = {
	validate: function ( tag, callback ) {
		var result = {
			valid: false,
			tag: tag,
			hash: Membership.hashCard( tag )
		};

		if ( Math.round( Math.random() ) == 1 ) valid = true;

		callback( result );
	},
	identify: function( hashedTag, callback ) {
		var fake = {
			firstname: "Joe",
			lastname: "Bloggs",
			member: true

		}

	},
	hashCard: function ( id ) {
		var md5 = crypto.createHash( 'md5' );
		md5.update( config.tag_salt );
		md5.update( id.toLowerCase() );
		return md5.digest( 'hex' );
	}
};

module.exports = Membership;
