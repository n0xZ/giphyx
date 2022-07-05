import { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'
import { GifList } from '~/components/gif/GifList'
import { MainLayout } from '~/components/layout'
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
	const selectedGIFS = JSON.parse(
		String(localStorage.getItem('favourite-gifs'))
	) as GIF[]
	if (typeof localStorage.getItem('favourite-gifs') === null)
		return <EmptyFavouriteGIFS />
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
