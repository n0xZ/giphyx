/** @type {import('next').NextConfig} */
module.exports = {
	reactStrictMode: true,
	env: {
		GIPHY_API_KEY: process.env.GIPHY_API_KEY,
		GIPHY_API_URL: process.env.GIPHY_API_URL,
		VERCEL_URL: process.env.VERCEL_URL,
		GITHUB_CLIENT_ID: process.env.GITHUB_CLIENT_ID,
		GITHUB_CLIENT_SECRET: process.env.GITHUB_CLIENT_SECRET,
	},
	images: {
		domains: [
			'media0.giphy.com',
			'media1.giphy.com',
			'media2.giphy.com',
			'media3.giphy.com',
			'media4.giphy.com',
			'media5.giphy.com',
		],
	},
	experimental: {
		images: {
			allowFutureImage: true,
		},
	},
}
