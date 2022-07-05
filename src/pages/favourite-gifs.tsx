import { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { useSession } from 'next-auth/react'
import { GifList } from '~/components/gif/GifList'
import { MainLayout } from '~/components/layout'
import ProtectedContent from '~/components/protected/ProtectedContent'
import { GIF } from '~/types'

const EmptyFavouriteGIFS = () => {
	return (
		<section>
			Al parecer no tienes GIFS Favoritos. Puedes elegirlos aquí:
			<Link href="/search/category">Por categoría</Link>
			<Link href="/search/category">Por nombre</Link>
		</section>
	)
}

const FavouriteGifs: NextPage = () => {
	const { data: session } = useSession()
	if (!session) return <ProtectedContent />

	if (localStorage.getItem('favourite-gifs') === null)
		return (
			<MainLayout>
				<EmptyFavouriteGIFS />
			</MainLayout>
		)
	const selectedGIFS = JSON.parse(
		String(localStorage.getItem('favourite-gifs'))
	) as GIF[]
	
	return (
		<MainLayout>
			<Head>
				<title>Giphyx - Mis GIFS Favoritos</title>
			</Head>
			<h2 className="text-center">Mis GIFS Favoritos</h2>
			<GifList gifs={selectedGIFS} />
		</MainLayout>
	)
}

export default FavouriteGifs
