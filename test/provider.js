/* global describe, it */
'use strict';

var expect   = require('chai').expect;
var Provider = require('../lib/provider');

describe('Provider', function() {
	it('should extend options', function() {
		var config = {
			auth: { type: 'fake' },
			defaults: {
				private: false,
				issues: false,
				wiki: false
			}
		};

		var provider = new Provider(config);

		expect(provider.extendOptions({ private: true, issues: true, wiki: true }))
			.to.deep.equal({ private: true, issues: true, wiki: true });

		expect(provider.extendOptions({ private: true, wiki: true }))
			.to.deep.equal({ private: true, issues: false, wiki: true });

		expect(provider.extendOptions({ wiki: true }))
			.to.deep.equal({ private: false, issues: false, wiki: true });

		expect(provider.extendOptions({}))
			.to.deep.equal({ private: false, issues: false, wiki: false });
	});
});