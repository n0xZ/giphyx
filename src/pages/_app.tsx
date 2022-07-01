import { withTRPC } from '@trpc/next'
import { AnimatePresence } from 'framer-motion'
import { AppType } from 'next/dist/shared/lib/utils'
import type { AppRouter } from '~/backend/routers/_app'
import '../styles/app.css'
const MyApp: AppType = ({ Component, pageProps }) => {
	return (
		<AnimatePresence exitBeforeEnter>
			<Component {...pageProps} />
		</AnimatePresence>
	)
}

export default withTRPC<AppRouter>({
	config({ ctx }) {
		/**
		 * If you want to use SSR, you need to use the server's full URL
		 * @link https://trpc.io/docs/ssr
		 */
		const url = process.env.VERCEL_URL
			? `https://${process.env.VERCEL_URL}/api/trpc`
			: 'http://localhost:3000/api/trpc'

		return {
			url,
			/**
			 * @link https://react-query.tanstack.com/reference/QueryClient
			 */
			// queryClientConfig: { defaultOptions: { queries: { staleTime: 60 } } },
		}
	},
	/**
	 * @link https://trpc.io/docs/ssr
	 */
	ssr: true,
})(MyApp)
