import { createSSGHelpers } from '@trpc/react/ssg'
import {
	GetStaticPaths,
	GetStaticPropsContext,
	InferGetStaticPropsType,
} from 'next'
import { useSession } from 'next-auth/react'
import Head from 'next/head'
import superjson from 'superjson'
import { appRouter } from '~/backend/routers/_app'
import { GifList } from '~/components/gif/GifList'
import { MainLayout } from '~/components/layout'
import ProtectedContent from '~/components/protected/ProtectedContent'
import { Category } from '~/types'

const SearchResults = ({
	results,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
	return (
		<MainLayout>
			<Head>
				<title>Giphyx - Resultados de busqueda:</title>
			</Head>
			{results && <GifList gifs={results} />}
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
	const { data: results } = await ssg.fetchQuery('gifs.getGIFByResults', {
		query: nameParam,
	})

	return {
		props: {
			trpcState: ssg.dehydrate(),
			results,
		},
		revalidate: 15,
	}
}
