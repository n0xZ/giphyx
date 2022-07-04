import { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { MainLayout } from '~/components/layout'

const SearchPage: NextPage = () => {
	return (
		<MainLayout>
			<Head>
				<title>Giphyx - Buscar gifs</title>
			</Head>
			<h2>Cómo desea realizar la busqueda de GIFS?</h2>

			<Link href="/search/category">Buscar por categoría</Link>
			<Link href="/search/name">Buscar por nombre</Link>
		</MainLayout>
	)
}

export default SearchPage
