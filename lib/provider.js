'use strict';

var _ = require('underscore');

var Provider = function(config) {
	if (!config) throw new TypeError('Missing arguments');
	if (!config.auth) throw new TypeError('Auth configuration not specified');
	if (!config.auth.type) throw new TypeError('Auth type not specified');
	if (!config.defaults) throw new TypeError('Defaults not specified');

	this.config = config;
};

Provider.prototype.extendOptions = function(options) {
	return _.extend(_.clone(this.config.defaults), _.clone(options));
};

module.exports = Provider;