var __root = '../..';
var __config = __root + '/config';

var request = require( 'request' ),
	queryString = require( 'query-string' ),
	crypto = require( 'crypto' ),
	config = require( __config + '/config.json' );

var Membership = {
	queryString: function( url, params ) {
		return url + '?' + queryString.stringify( params );
	},
	get: function( url, params, cb ) {
		if ( typeof params === 'function' ) cb = params;
		if ( typeof params !== 'object' ) params = {};
		params.api_key = config['membership-system-api'].key;

		var url = Membership.queryString( config['membership-system-api'].url + url, params );

		// console.log( url );

		var options = {
			url: url
		};

		request( options, cb );
	},
	validate: function ( tag, cb ) {
		var hash = Membership.hashCard( tag );

		var result = {
			valid: false,
			tag: tag,
			hash: hash
		};

		Membership.get( '/validate/' + hash, {}, function( error, response, body ) {
			if ( response.statusCode == '200 ') {
				var output = JSON.parse( body );
				if ( output.valid )
					result.valid = true;
			}
			return cb( result );
		} );
	},
	identify: function( hash, cb ) {
		var result = {};

		Membership.get( '/identify/' + hash, {}, function( error, response, body ) {
			if ( response.statusCode == '200 ') {
				result = JSON.parse( body );
			}
			return cb( result );
		} );
	},
	hashCard: function ( id ) {
		var md5 = crypto.createHash( 'md5' );
		md5.update( config.tag_salt );
		md5.update( id.toLowerCase() );
		return md5.digest( 'hex' );
	}
};

module.exports = Membership;
