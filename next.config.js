const Dotenv = require("dotenv-webpack");

module.exports = {
	experimental: {
		concurrentFeatures: true,
	},
	webpack: (config, { isServer }) => {
		config.plugins.push(new Dotenv());
		if (!isServer) {
			config.resolve.fallback.fs = false;
		}
		return config;
	},
};
