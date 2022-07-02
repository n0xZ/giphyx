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
}: {
	isError: boolean
	error: string | undefined
	isFetching: boolean
	data: SearchResultsI | undefined
}) => {
	if (isFetching) return <Loading />
	if (isError) return <FetchError error={error!} />
	if (!data?.data) return <div>No se ha encontrado nada.</div>
	return <GifList gifs={data?.data!} />
}

const SearchGifByName = () => {
	const [searchQuery, setSearchQuery] = useState('')

	const { data, isError, isFetching, isRefetching, isLoading, refetch, error } =
		trpc.useQuery(['gifs.getGIFByResults', { query: searchQuery }], {
			enabled: false,
		})

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { target } = e
		setSearchQuery(target.value)
	}

	// 'handleSubmit' Triggers the refetch function, that will search gifs based on 'searchQuery' state.

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		
		refetch()
	}

	return (
		<MainLayout>
			<h2 className="mb-5 text-3xl text-center">Buscar Gif por nombre</h2>
			<form
				onSubmit={handleSubmit}
				className="flex flex-row items-center justify-center space-x-5"
			>
				<input
					placeholder="Por ej... Anime"
					className="px-2 py-2 border-2 border-gray-500 rounded-xl"
					type="text"
					value={searchQuery}
					onChange={handleChange}
				/>
				<button className="px-5 py-3 rounded-xl bg-amber" type="submit">
					Buscar
				</button>
			</form>
			{!isRefetching && (
				<FetchResults
					data={data}
					error={error?.message}
					isError={isError}
					isFetching={isFetching}
				/>
			)}
		</MainLayout>
	)
}

export default SearchGifByName
