import { NextPage } from 'next'
import Link from 'next/link'
import { MainLayout } from '~/components/layout'

const SearchPage: NextPage = () => {
	return (
		<MainLayout>
			<h2>Cómo desea buscar los gifs?</h2>

			<Link href="/search/category">Por categoría</Link>
			<Link href="/search/name">Por nombre</Link>
		</MainLayout>
	)
}

export default SearchPage
