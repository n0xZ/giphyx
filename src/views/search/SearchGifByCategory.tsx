import { useQuery } from 'react-query'
import Categorieslist from '~/components/category/CategoriesList'
import { MainLayout } from '~/components/layout'
import Loading from '~/components/loading/Loading'
import { getCategories } from '~/services/api'

const SearchGifByCategory = () => {
	const { data, isLoading } = useQuery('get-categories', getCategories)
	if (isLoading) return <Loading />
	return (
		<MainLayout>
			<h2>Buscar gifs por categoría</h2>
			<Categorieslist categories={data?.data!} />
		</MainLayout>
	)
}

export default SearchGifByCategory
