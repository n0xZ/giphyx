import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { GifList } from '~/components/gif/GifList'
import { MainLayout } from '~/components/layout'
import { Loading } from '~/components/loading/Loading'

import { trpc } from '~/utils/trpc'

const SearchResults: NextPage = () => {
	const { query } = useRouter()
	const { data, isLoading } = trpc.useQuery([
		'gifs.gif-search-results',
		String(query.query),
	])
	if (isLoading) return <Loading />
	return (
		<MainLayout>
			<GifList gifs={data?.result.data.data!} />
		</MainLayout>
	)
}

export default SearchResults
