const Dotenv = require("dotenv-webpack");

module.exports = {
	webpack: (config, { isServer }) => {
		config.plugins.push(new Dotenv());
		if (!isServer) {
			config.resolve.fallback.fs = false;
		}
		return config;
	},
};
