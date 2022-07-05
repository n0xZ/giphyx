import Head from 'next/head'
import type { NextPage } from 'next'

import Categorieslist from '~/components/category/CategoriesList'
import { MainLayout } from '~/components/layout'
import { Loading } from '~/components/loading/Loading'
import { FetchError } from '~/components/error/FetchError'
import { trpc } from '~/utils/trpc'
import { useSession } from 'next-auth/react'
import ProtectedContent from '~/components/protected/ProtectedContent'
const CategoriesPage: NextPage = () => {
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
	const { data: categories, isLoading } = trpc.useQuery(['cat.getCategories'])

	if (isLoading) return <Loading />
	if (!categories)
		return (
			<>
				<Head>
					<title>Giphy - Error</title>
				</Head>
				<FetchError customError="Hubo un error al cargar las categorías." />
			</>
		)

	return (
		<MainLayout>
			<Head>
				<title>Giphyx - Buscar por categoría</title>
			</Head>
			<h2 className="mt-5 mb-3 text-3xl font-bold text-center">
				Buscar gifs por categoría
			</h2>
			<Categorieslist categories={categories.data!} />
		</MainLayout>
	)
}

export default CategoriesPage
