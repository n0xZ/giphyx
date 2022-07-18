import { withTRPC } from '@trpc/next'
import { SessionProvider } from 'next-auth/react'
import { AnimatePresence } from 'framer-motion'
import superjson from 'superjson'
import { Toaster } from 'react-hot-toast'
import { AppType } from 'next/dist/shared/lib/utils'
import type { AppRouter } from '~/backend/routers/_app'
import '../styles/app.css'
const MyApp: AppType = ({ Component, pageProps }) => {
	return (
		<>
			<AnimatePresence exitBeforeEnter>
				<Component {...pageProps} />
				<Toaster position="top-right" />
			</AnimatePresence>
		</>
	)
}

export default withTRPC<AppRouter>({
	config({ ctx }) {
		/**
		 * If you want to use SSR, you need to use the server's full URL
		 * @link https://trpc.io/docs/ssr
		 */

		const url = '/api/trpc'
		return {
			url,

			/**
			 * @link https://react-query.tanstack.com/reference/QueryClient
			 */
			queryClientConfig: {
				defaultOptions: { queries: { staleTime: 60, useErrorBoundary: true } },
			},
			headers() {
				if (ctx?.req) {
					return {
						...ctx.req.headers,
						'x-ssr': '1',
					}
				}
				return {}
			},
			transformer: superjson,
		}
	},
	/**
	 * @link https://trpc.io/docs/ssr
	 */
	ssr: false,
})(MyApp)
