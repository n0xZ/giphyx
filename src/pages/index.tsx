import Head from 'next/head'
import Link from 'next/link'

const Home = () => {
	return (
		<main className="container grid min-h-screen grid-cols-2 mx-auto place-items-center">
			<Head>
				<title>Bienvenido a Giphyx!</title>
			</Head>
			<section className="flex flex-col items-center space-y-5">
				<h1 className="text-5xl tracking-wide text-center ">
					Busque sus{' '}
					<span className="text-transparent font-bold bg-clip-text bg-gradient-to-r from-[#7928ca] to-[#ff0080]">
						gifs favoritos de Giphy
					</span>{' '}
					y guardelos.
				</h1>
				<Link href="/search">
					<button className="p-[2px] bg-gradient-to-r from-[#7928ca] to-[#ff0080]  rounded-xl">
						<aside className="p-10 bg-black hover:bg-slate-600 rounded-xl">Comenzar ya</aside>
					</button>
				</Link>
			</section>
			<section></section>
		</main>
	)
}

export default Home
