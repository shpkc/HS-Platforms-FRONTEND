const Dotenv = require("dotenv-webpack");
const withNx = require("@nrwl/next/plugins/with-nx");

const withMDX = require("@next/mdx")({
	extension: /\.mdx?$/,
	options: {
		remarkPlugins: [],
		rehypePlugins: [],
	},
});

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
module.exports = withMDX({
	pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
})(withNx(nextConfig));
