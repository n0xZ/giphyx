import Link from 'next/link'

const Home = () => {
	return (
		<main>
			<p>Bienvenido a Giphyx!</p>
			<p>Encuentre sus gifs favoritos de Giphy, y guardelos!</p>
			<Link href="/search">Comenzar ya</Link>
		</main>
	)
}

export default Home
