/** @type {import('next').NextConfig} */
module.exports = {
	reactStrictMode: true,
	env: {
		GIPHY_API_KEY: process.env.GIPHY_API_KEY,
		GIPHY_API_URL: process.env.GIPHY_API_URL,
		VERCEL_URL: process.env.VERCEL_URL,
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
}
