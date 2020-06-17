const path = require("path");
const withImages = require("next-images");

module.exports = withImages({
	webpack: config => {
		if (config.resolve.modules)
			config.resolve.modules.unshift(path.resolve(__dirname, "src"));
		return config;
	},
	experimental: {
		async rewrites() {
			return [
				{
					source: "/",
					destination: "/index.html"
				}
			];
		},
		async redirects() {
			return [
				{
					source: "/:path+/",
					destination: "/:path+",
					permanent: false
				}
			];
		}
	}
});
