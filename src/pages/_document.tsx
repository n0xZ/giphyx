import { Html, Head, Main, NextScript } from 'next/document'
export default function Document() {
	return (
		<Html>
			<Head>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link
					rel="preconnect"
					href="https://fonts.gstatic.com"
					crossOrigin="anonymous"
				/>
				<link
					href="https://fonts.googleapis.com/css2?family=Inter:wght@300&family=Lato:wght@300&family=Montserrat:wght@300&display=swap"
					rel="stylesheet"
				/>
			</Head>
			<body className="text-gray-100 bg-black font-inter">
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}
