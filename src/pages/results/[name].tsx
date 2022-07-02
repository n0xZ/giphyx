import { createSSGHelpers } from '@trpc/react/ssg'
import {
	GetStaticPaths,
	GetStaticPropsContext,
	InferGetStaticPropsType,
	NextPage,
} from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import superjson from 'superjson'
import { appRouter } from '~/backend/routers/_app'
import { GifList } from '~/components/gif/GifList'
import { MainLayout } from '~/components/layout'
import { Loading } from '~/components/loading/Loading'
import { Category } from '~/types'

import { trpc } from '~/utils/trpc'

const SearchResults = (
	props: InferGetStaticPropsType<typeof getStaticProps>
) => {
	const { query } = useRouter()
	const { data: results, status } = trpc.useQuery([
		'gifs.getGIFByResults',
		{ query: props.nameParam },
	])
	if (status !== 'success') return <Loading />
	return (
		<MainLayout>
			<Head>
				<title>Giphyx - Resultados de busqueda:{query.name}</title>
			</Head>
			{results?.data && <GifList gifs={results?.data} />}
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
			params: { name: name_encoded },
		})),
		fallback: 'blocking',
	}
}

export const getStaticProps = async (
	context: GetStaticPropsContext<{ name: string }>
) => {
	const nameParam = context.params?.name as string
	const ssg = await createSSGHelpers({
		ctx: {},
		router: appRouter,
		transformer: superjson,
	})
	await ssg.prefetchQuery('gifs.getGIFByResults', { query: nameParam })
	return {
		props: {
			trpcState: ssg.dehydrate(),
			nameParam,
		},
		revalidate: 15,
	}
}
