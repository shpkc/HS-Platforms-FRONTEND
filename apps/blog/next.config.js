const Dotenv = require("dotenv-webpack");
const withNx = require("@nrwl/next/plugins/with-nx");

const nextConfig = {
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
module.exports = withNx(nextConfig);
