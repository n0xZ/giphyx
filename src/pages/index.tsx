import Head from 'next/head'
import Link from 'next/link'

const Home = () => {
	return (
		<main>
			<Head>
				<title>Bienvenido a Giphyx!</title>
			</Head>
			<p>Bienvenido a Giphyx!</p>
			<p>Encuentre sus gifs favoritos de Giphy, y guardelos!</p>
			<Link href="/search">Comenzar ya</Link>
		</main>
	)
}

export default Home
