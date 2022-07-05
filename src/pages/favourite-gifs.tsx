import { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/future/image'
import { useSession } from 'next-auth/react'
import { GifList } from '~/components/gif/GifList'
import { MainLayout } from '~/components/layout'
import ProtectedContent from '~/components/protected/ProtectedContent'
import CategoriesSearchAsset from '~/public/search-category.svg'
import NameSearchAsset from '~/public/search-name.svg'
import { GIF } from '~/types'

const EmptyFavouriteGIFS = () => {
	return (
		<MainLayout>
			<h2 className="mt-6 text-lg font-bold text-center xl:text-2xl">
				Al parecer no tienes GIFS Favoritos. Puedes elegirlos aquí:
			</h2>
			<section className="container flex flex-col items-center justify-center h-screen grid-cols-2 mx-auto space-y-8 xl:space-x-5 xl:space-y-0 xl:flex-row xl:justify-center ">
				<article className="grid gap-3 p-2 duration-100 ease-in border-2 border-black place-items-center hover:-translate-y-1 rounded-xl hover:border-purple-800">
					<Image
						className="w-3/4 "
						src={CategoriesSearchAsset.src}
						width={CategoriesSearchAsset.width}
						priority={true}
						height={CategoriesSearchAsset.height}
					/>

					<button className="bg-gradient-to-r p-[1px] from-[#7928ca] to-[#ff0080] rounded-xl hover:opacity-60">
						<Link href="/search/category">
							<aside className="p-5 font-bold dark:bg-black rounded-xl">
								Buscar por categoría
							</aside>
						</Link>
					</button>
				</article>

				<article className="grid gap-3 p-3 duration-100 ease-in border-2 border-black place-items-center hover:-translate-y-1 rounded-xl hover:border-[#7928ca]">
					<Image
						className="w-3/4 dark:bg-black rounded-xl"
						src={NameSearchAsset.src}
						width={NameSearchAsset.width}
						priority={true}
						height={NameSearchAsset.height}
					/>
					<button className="bg-gradient-to-r p-[1px] from-[#7928ca] to-[#ff0080] rounded-xl hover:opacity-60">
						<Link href="/search/name">
							<aside className="p-5 font-bold dark:bg-black rounded-xl">
								Buscar por nombre
							</aside>
						</Link>
					</button>
				</article>
			</section>
		</MainLayout>
	)
}

const FavouriteGifs: NextPage = () => {
	const { data: session } = useSession()
	if (!session)
		return (
			<>
				<Head>
					<title>Giphyx - No puedes ver este contenido</title>
				</Head>
				<ProtectedContent />
			</>
		)

	if (localStorage.getItem('favourite-gifs') === null)
		return (
			<>
				<Head>
					<title>Giphyx - Al parecer no tienes GIFS Favoritos</title>
				</Head>
				<EmptyFavouriteGIFS />
			</>
		)
	const selectedGIFS = JSON.parse(
		String(localStorage.getItem('favourite-gifs'))
	) as GIF[]

	return (
		<MainLayout>
			<Head>
				<title>Giphyx - Mis GIFS Favoritos</title>
			</Head>
			<h2 className="mt-6 text-lg font-bold text-center xl:text-2xl">
				Mis GIFS Favoritos
			</h2>
			<GifList gifs={selectedGIFS} />
		</MainLayout>
	)
}

export default FavouriteGifs
