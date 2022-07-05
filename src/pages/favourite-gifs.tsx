import { NextPage } from 'next'
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
		String(localStorage.getItem('selected-gifs'))
	) as GIF[]
	if (FavouriteGifs.length === 0) return <EmptyFavouriteGIFS />
	return (
		<MainLayout>
			<h2 className="text-center">Mis GIFS Favoritos</h2>
			<GifList gifs={selectedGIFS} />
		</MainLayout>
	)
}

export default FavouriteGifs
