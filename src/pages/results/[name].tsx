import { createSSGHelpers } from '@trpc/react/ssg'
import {
	GetStaticPaths,
	GetStaticPropsContext,
	InferGetStaticPropsType,
	NextPage,
} from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { appRouter } from '~/backend/routers/_app'
import { GifList } from '~/components/gif/GifList'
import { MainLayout } from '~/components/layout'
import { Loading } from '~/components/loading/Loading'
import { Category } from '~/types'

import { trpc } from '~/utils/trpc'

const SearchResults = ({
	results,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
	console.log(results)
	if (!results) return <div>No se encontrado el gif.</div>
	const { query } = useRouter()
	return (
		<MainLayout>
			<Head>
				<title>Giphyx - Resultados de busqueda:{query.name}</title>
			</Head>
			<GifList gifs={results} />
		</MainLayout>
	)
}

export default SearchResults

export const getStaticPaths: GetStaticPaths = async () => {
	const API_KEY = String(process.env.GIPHY_API_KEY)
	const API_URL = String(process.env.GIPHY_API_URL)
	const response = await fetch(`${API_URL}/categories?api_key=${API_KEY}`)
	const { data: categories }: Category = await response.json()

	return {
		paths: categories.map(({ name_encoded }) => ({
			params: { name_encoded },
		})),
		fallback: 'blocking',
	}
}

export const getStaticProps = async (
	context: GetStaticPropsContext<{ name: string }>
) => {
	const nameParam = context.params?.name as string
	const ssg = await createSSGHelpers({ ctx: {}, router: appRouter })
	const { data: results } = await ssg.fetchQuery('gifs.gif-search-results', {
		query: nameParam,
	})

	return {
		props: {
			trpcState: ssg.dehydrate(),
			results: results === undefined ? null : results,
		},
	}
}
