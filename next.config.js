/** @type {import('next').NextConfig} */
module.exports = {
	reactStrictMode: true,
	env: {
		GIPHY_API_KEY: process.env.GIPHY_API_KEY,
		GIPHY_API_URL: process.env.GIPHY_API_URL,
	},
	images: {
		domains: [
			'media3.giphy.com',
			'media0.giphy.com',
			'media2.giphy.com',
			'media1.giphy.com',
		],
	},
}
