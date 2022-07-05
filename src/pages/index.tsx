import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/future/image'
import HomeImage from '~/public/home-image.png'

const Home = () => {
	return (
		<main className="container grid min-h-screen grid-cols-1 mx-auto xl:grid-cols-2 place-items-center">
			<Head>
				<title>Bienvenido a Giphyx!</title>
			</Head>{' '}
			<section className="grid place-items-center">
				<Image
					className="w-3/4 rounded-xl bg-gradient-to-r p-[2px] from-[#7928ca] to-[#ff0080] "
					src={HomeImage.src}
					width={HomeImage.width}
					priority={true}
					height={HomeImage.height}
				/>
			</section>
			<section className="flex flex-col items-center space-y-5">
				<h1 className="text-5xl tracking-wide text-center ">
					Busque sus{' '}
					<span className="text-transparent font-bold bg-clip-text bg-gradient-to-r from-[#7928ca] to-[#ff0080]">
						gifs favoritos de Giphy
					</span>{' '}
					y guardelos.
				</h1>
				<Link href="/search">
					<button className="p-[2px] bg-gradient-to-r from-[#7928ca] to-[#ff0080] hover:opacity-80 rounded-xl">
						<aside className="p-5 bg-zinc-900 rounded-xl">Comenzar ya</aside>
					</button>
				</Link>
			</section>
		</main>
	)
}

export default Home
