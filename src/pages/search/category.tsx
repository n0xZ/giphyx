import type { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next'
import { createSSGHelpers } from '@trpc/react/ssg'
import Categorieslist from '~/components/category/CategoriesList'
import { MainLayout } from '~/components/layout'
import { getCategories } from '~/services/api'

import { trpc } from '~/utils/trpc'
import { appRouter } from '~/backend/routers/_app'
const CategoriesPage: NextPage = ({
	categories,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
	if (!categories) return <div>Hubo un error al cargar las categorías.</div>
	return (
		<MainLayout>
			{' '}
			<h2 className="text-center text-3xl font-bold mt-5 mb-3">
				Buscar gifs por categoría
			</h2>
			<Categorieslist categories={categories} />
		</MainLayout>
	)
}

export default CategoriesPage

export const getStaticProps: GetStaticProps = async () => {
	const ssg = createSSGHelpers({ ctx: {}, router: appRouter })
	const data = await ssg.fetchQuery('categories.categories')

	return {
		props: {
			categories: data.data,
		},
	}
}
