import { useState, ChangeEvent, FormEvent } from 'react'
import { FetchError } from '~/components/error/FetchError'
import { GifList } from '~/components/gif/GifList'
import { MainLayout } from '~/components/layout'
import { Loading } from '~/components/loading/Loading'
import { trpc } from '~/utils/trpc'
import { SearchResultsI } from '~/types'

const FetchResults = ({
	data,
	error,
	isError,
	isFetching,
	isLoading,
}: {
	isLoading: boolean
	isError: boolean
	error: string | undefined
	isFetching: boolean
	data: SearchResultsI | undefined
}) => {
	if (isFetching || isLoading) return <Loading />
	if (isError) return <FetchError error={error!} />
	if (!data?.result && !isLoading) return <div>No se ha encontrado nada.</div>
	return <GifList gifs={data?.result.data.data!} />
}

const SearchGifByName = () => {
	const [searchQuery, setSearchQuery] = useState('')
	const [hasSubmitted, setHasSubmitted] = useState(false)

	const { data, isError, isFetching, isLoading, refetch, error } =
		trpc.useQuery(['gifs.gif-search-results', searchQuery], {
		refetchInterval:2000
		})

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { target } = e
		setSearchQuery(target.value)
	}

	// 'handleSubmit' Triggers the refetch function, that will search gifs based on 'searchQuery' state.

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		setHasSubmitted(prev=>!prev)
	}

	return (
		<MainLayout>
			<h2 className="text-center text-3xl mb-5">Buscar Gif por nombre</h2>
			<form
				onSubmit={handleSubmit}
				className="flex flex-row items-center justify-center space-x-5"
			>
				<input
					placeholder="Por ej... Anime"
					className="rounded-xl px-2 py-2 border-2 border-gray-500"
					type="text"
					value={searchQuery}
					onChange={handleChange}
				/>
				<button className="px-5 py-3 rounded-xl bg-amber" type="submit">
					Buscar
				</button>
			</form>
			{searchQuery.length > 3 && (
				<FetchResults
					data={data}
					error={error?.message}
					isError={isError}
					isFetching={isFetching}
					isLoading={isLoading}
				/>
			)}
		</MainLayout>
	)
}

export default SearchGifByName
