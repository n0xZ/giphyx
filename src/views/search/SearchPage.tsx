import { Link } from 'react-router-dom'

import { MainLayout } from '../../components/layout'
import { getCategories } from '~/services/api'

const Search = () => {
	return (
		<MainLayout>
			<h2>Cómo desea buscar los gifs?</h2>

			<Link to="/search/category">Por categoría</Link>
			<Link to="/search/name">Por nombre</Link>
		</MainLayout>
	)
}

export default Search
