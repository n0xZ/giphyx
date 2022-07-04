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
	const [resultPages, setResultPages] = useState(12)
	const [hasDisplayedResults, setHasDisplayedResults] = useState(false)
	const { data, isError, isFetching, isRefetching, isLoading, refetch, error } =
		trpc.useQuery(
			['gifs.getPaginatedGIFS', { query: searchQuery, limit: resultPages }],
			{
				enabled: hasDisplayedResults,
			}
		)

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { target } = e
		setSearchQuery(target.value)
	}

	// 'handleSubmit' Triggers the refetch function, that will search gifs based on 'searchQuery' state.

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		refetch()
		setResultPages((prev) => prev + 12)
		setHasDisplayedResults(true)
	}
	const handlePagination = () => {
		setResultPages((prev) => prev + 12)
		refetch()
	}
	const handleResetResults = () => {
		setHasDisplayedResults((prev) => !prev)
	}
	return (
		<MainLayout>
			<h2 className="mt-3 mb-5 text-3xl text-center">
				{hasDisplayedResults
					? `Resultados de busqueda: ${searchQuery}`
					: 'Buscar Gif por nombre'}
			</h2>
			<form
				onSubmit={handleSubmit}
				className="flex flex-row items-center justify-center space-x-5"
			>
				<input
					placeholder="Por ej... Anime"
					className="px-2 py-2 text-gray-100 bg-transparent border-2 border-gray-500 rounded-xl"
					type="text"
					value={searchQuery}
					onChange={handleChange}
				/>

				<button
					type="submit"
					className="px-5 py-3 border-2 border-gray-700 rounded-xl bg-amber"
				>
					Buscar
				</button>
				<button
					type="button"
					className="px-5 py-3 border-2 border-gray-700 rounded-xl bg-amber"
					onClick={() => handleResetResults()}
				>
					Limpiar resultados
				</button>
			</form>
			{hasDisplayedResults && (
				<FetchResults
					data={data}
					error={error?.message}
					isError={isError}
					isFetching={isFetching}
				/>
			)}
			{hasDisplayedResults && (
				<button
					className="px-5 py-3 border-2 rounded-lg cursor-default border-emerald-500"
					onClick={() => handlePagination()}
				>
					Ver más resultados
				</button>
			)}
		</MainLayout>
	)
}

export default SearchGifByName
