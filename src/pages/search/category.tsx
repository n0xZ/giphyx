import Head from 'next/head'
import type { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next'

import Categorieslist from '~/components/category/CategoriesList'
import { MainLayout } from '~/components/layout'

import { trpc } from '~/utils/trpc'

import { Loading } from '~/components/loading/Loading'
const CategoriesPage: NextPage = () => {
	const { data: categories, isLoading } = trpc.useQuery(['cat.getCategories'])

	if (isLoading) return <Loading />
	if (!categories) return <div>Hubo un error al cargar las categorías.</div>
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
