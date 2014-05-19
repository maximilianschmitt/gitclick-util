'use strict';

var createError = require('create-error');
var Provider    = require('./provider');

var util = {
	errors: {
		BoxExistsError: createError('BoxExistsError'),
		ValidationError: createError('ValidationError'),
		ProviderError: createError('ProviderError'),
		BoxNotFoundError: createError('BoxNotFoundError'),
		NotConfiguredError: createError('NotConfiguredError')
	},
	Provider: Provider
};

module.exports = util;