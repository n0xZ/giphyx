import type { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next'
import Categorieslist from '~/components/category/CategoriesList'
import { FetchError } from '~/components/error/FetchError'
import { MainLayout } from '~/components/layout'
import { Loading } from '~/components/loading/Loading'
import { getCategories } from '~/services/api'
import { Category } from '~/types'

const CategoriesPage: NextPage = ({
	data,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
	return (
		<MainLayout>
			{' '}
			<h2 className="text-center text-3xl font-bold mt-5 mb-3">
				Buscar gifs por categoría
			</h2>
			<Categorieslist categories={data?.data!} />
		</MainLayout>
	)
}

export default CategoriesPage

export const getStaticProps: GetStaticProps = async () => {
	const data = await getCategories()
	return {
		props: {
			data,
		},
	}
}
