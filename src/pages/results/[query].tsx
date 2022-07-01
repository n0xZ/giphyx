import { useRouter } from 'next/router'
import { useQuery } from 'react-query'

import { FetchError } from '~/components/error/FetchError'
import { GifList } from '~/components/gif/GifList'
import { MainLayout } from '~/components/layout'
import { Loading } from '~/components/loading/Loading'
import { getSearchResultsByQuery } from '~/services/api'
import { SearchResultsI } from '~/types'
const SearchResults = () => {
	const params = useRouter()
	const { data, isLoading, isError, error } = useQuery<SearchResultsI, Error>(
		'gif-based-on-query',
		() => getSearchResultsByQuery(String(params.query.query)!)
	)
	if (isLoading) return <Loading />
	if (isError) return <FetchError error={error} />
	return (
		<MainLayout>
			<GifList gifs={data?.data!} />
		</MainLayout>
	)
}

export default SearchResults