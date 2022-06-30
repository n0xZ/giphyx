import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'
import { MainLayout } from '~/components/layout'
const SearchResults = () => {
	const params = useParams()

	return <MainLayout>SearchResults</MainLayout>
}

export default SearchResults
