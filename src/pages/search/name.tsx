import { useState, ChangeEvent, FormEvent, useRef } from 'react'
import { FetchError } from '~/components/error/FetchError'
import { GifList } from '~/components/gif/GifList'
import { MainLayout } from '~/components/layout'
import { Loading } from '~/components/loading/Loading'
import { trpc } from '~/utils/trpc'
import { SearchResultsI } from '~/types'
import Head from 'next/head'
import { useSession } from 'next-auth/react'
import ProtectedContent from '~/components/protected/ProtectedContent'

const FetchResults = ({
	data,
	error,
	isError,
	isFetching,
	isStale,
}: {
	isError: boolean
	isStale: boolean
	error: string | undefined
	isFetching: boolean
	data: SearchResultsI | undefined
}) => {
	if (isFetching) return <Loading />
	if (isError) return <FetchError error={error!} />
	if (!data?.data && isStale) return null
	return <GifList gifs={data?.data!} />
}

const SearchGifByName = () => {
	const [searchQuery, setSearchQuery] = useState('')
	const [resultPages, setResultPages] = useState(12)
	const [hasDisplayedResults, setHasDisplayedResults] = useState(false)
	const { data: session } = useSession()

	if (!session) return <ProtectedContent />

	const { data, isError, isFetching, isStale, refetch, error } = trpc.useQuery(
		['gifs.getPaginatedGIFS', { query: searchQuery, limit: resultPages }],
		{
			enabled: hasDisplayedResults,
			refetchOnWindowFocus: false,
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
		setTimeout(() => setHasDisplayedResults(false), 1500)
	}

	// 'handlePagination' Will increase the resultPage states for paginating the
	const handlePagination = () => {
		setResultPages((prev) => prev + 12)
		refetch()
	}

	//'handleResetResults' Cleans the displayed results, and the search query state.
	const handleResetResults = () => {
		setHasDisplayedResults(false)
		setSearchQuery('')
	}

	return (
		<MainLayout>
			<Head>
				<title>Giphyx - Buscar por nombre</title>
			</Head>
			<h2 className="mt-3 mb-5 text-3xl text-center">
				{hasDisplayedResults
					? `Resultados de busqueda: ${searchQuery}`
					: 'Buscar Gif por nombre'}
			</h2>
			<form
				onSubmit={handleSubmit}
				className="flex flex-col items-center justify-center p-3 space-x-5 space-y-3 xl:space-y-0 xl:flex-row"
			>
				<input
					placeholder="Por ej... Anime"
					className="w-48 px-2 py-2 text-gray-100 bg-transparent border-2 border-gray-500 xl:w-64 rounded-xl"
					type="text"
					value={searchQuery}
					onChange={handleChange}
				/>

				<button
					type="submit"
					className="w-48 px-3 py-3 border-2 border-gray-700 rounded-xl "
				>
					Buscar
				</button>
				<button
					type="button"
					className="px-2 py-2 border-2 border-gray-700 w-48px-1 xl:px-3 xl:py-3 rounded-xl bg-amber"
					onClick={() => handleResetResults()}
				>
					Limpiar resultados
				</button>
			</form>
			{hasDisplayedResults ||
				(isStale && (
					<FetchResults
						data={data}
						error={error?.message}
						isStale={isStale}
						isError={isError}
						isFetching={isFetching}
					/>
				))}
			{hasDisplayedResults && !isFetching && (
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
