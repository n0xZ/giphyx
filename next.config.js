/** @type {import('next').NextConfig} */
module.exports = {
	reactStrictMode: true,
	env: {
		API_URL: process.env.NEXT_APP_API_URL,
	},
}
