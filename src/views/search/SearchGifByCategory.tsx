import { useQuery } from 'react-query'
import Categorieslist from '~/components/category/CategoriesList'
import { MainLayout } from '~/components/layout'
import {Loading} from '~/components/loading/Loading'
import { getCategories } from '~/services/api'

const SearchGifByCategory = () => {
	const { data, isLoading,isSuccess ,} = useQuery('get-categories', getCategories)
	if (isLoading) return <Loading />
	if(!isSuccess) return<div>Ha ocurrido un error al cargar las categorías. Por favor, vuelva a intentarlo más tarde.</div>
	return (
		<MainLayout>
			<h2 className='text-center text-3xl font-bold mt-5 mb-3'>Buscar gifs por categoría</h2>
			<Categorieslist categories={data?.data!} />
		</MainLayout>
	)
}

export default SearchGifByCategory
