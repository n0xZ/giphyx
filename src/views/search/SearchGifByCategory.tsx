import { useQuery } from 'react-query'
import Categorieslist from '~/components/category/CategoriesList'
import { FetchError } from '~/components/error/FetchError'
import { MainLayout } from '~/components/layout'
import { Loading } from '~/components/loading/Loading'
import { getCategories } from '~/services/api'
import { Category } from '~/types'

const SearchGifByCategory = () => {
	const { data, isLoading, isError, error } = useQuery<Category, Error>(
		'get-categories',
		getCategories
	)
	if (isLoading) return <Loading />
	if (isError) return <FetchError error={error} />
	return (
		<MainLayout>
			<h2 className="text-center text-3xl font-bold mt-5 mb-3">
				Buscar gifs por categoría
			</h2>
			<Categorieslist categories={data?.data!} />
		</MainLayout>
	)
}

export default SearchGifByCategory
