import React, { useState, ChangeEvent, FormEvent } from 'react'
import { useQuery } from 'react-query'
import { FetchError } from '~/components/error/FetchError'
import { GifList } from '~/components/gif/GifList'
import { MainLayout } from '~/components/layout'
import { Loading } from '~/components/loading/Loading'
import { getSearchResultsByQuery } from '~/services/api'
import { SearchResultsI } from '~/types'

const FetchResults = ({
	data,
	error,
	isError,
	isFetching,
}: {
	isError: boolean
	error: Error | null
	isFetching: boolean
	data: SearchResultsI
}) => {
	if (isFetching) return <Loading />
	if (isError) return <FetchError error={error!} />
	if (data.data!.length === 0) return <p>No se ha encontrado nada</p>
	return <GifList gifs={data?.data!} />
}

const SearchGifByName = () => {
	const [searchQuery, setSearchQuery] = useState('')

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { target } = e
		setSearchQuery(target.value)
	}
	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		refetch()
	}
	const { data, isError, isFetching, refetch, error } = useQuery<
		SearchResultsI,
		Error
	>('search-results', () => getSearchResultsByQuery(searchQuery))

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

			<FetchResults
				data={data!}
				error={error}
				isError={isError}
				isFetching={isFetching}
			/>
		</MainLayout>
	)
}

export default SearchGifByName
