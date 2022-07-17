import { CreateTRPCClientOptions, createTRPCClient } from '@trpc/client'
import {} from '@trpc/client'
import {
	TRPCWebSocketClient,
	WebSocketClientOptions,
	createWSClient,
} from '@trpc/client/links/wsLink'
import {
	CreateHTTPHandlerOptions,
	createHTTPServer,
} from '@trpc/server/dist/declarations/src/adapters/standalone'
import { AnyRouter } from '@trpc/server/dist/declarations/src'
import ws from 'ws'
import {
	WSSHandlerOptions,
	applyWSSHandler,
} from '@trpc/server/dist/declarations/src/adapters/ws'
export function routerToServerAndClient<TRouter extends AnyRouter>(
	router: TRouter,
	opts?: {
		server?: Partial<CreateHTTPHandlerOptions<TRouter>>
		wssServer?: Partial<WSSHandlerOptions<TRouter>>
		wsClient?: Partial<WebSocketClientOptions>
		client?:
			| Partial<CreateTRPCClientOptions<TRouter>>
			| ((opts: {
					httpUrl: string
					wssUrl: string
					wsClient: TRPCWebSocketClient
			  }) => Partial<CreateTRPCClientOptions<TRouter>>)
	}
) {
	// http
	const httpServer = createHTTPServer({
		router,
		createContext: ({ req, res }) => ({ req, res }),
		...(opts?.server ?? {
			batching: {
				enabled: true,
			},
		}),
	})
	const { port: httpPort } = httpServer.listen(0)
	const httpUrl = `http://localhost:${httpPort}`

	// wss
	const wss = new ws.Server({ port: 0 })
	const wssPort = (wss.address() as any).port as number
	const applyWSSHandlerOpts: WSSHandlerOptions<TRouter> = {
		wss,
		router,
		createContext: ({ req, res }) => ({ req, res }),
		...((opts?.wssServer as any) ?? {}),
	}
	const wssHandler = applyWSSHandler(applyWSSHandlerOpts)
	const wssUrl = `ws://localhost:${wssPort}`

	// client
	const wsClient = createWSClient({
		url: wssUrl,
		...opts?.wsClient,
	})
	const trpcClientOptions: CreateTRPCClientOptions<typeof router> = {
		url: httpUrl,
		...(opts?.client
			? typeof opts.client === 'function'
				? opts.client({ httpUrl, wssUrl, wsClient })
				: opts.client
			: {}),
	}
	const client = createTRPCClient<typeof router>(trpcClientOptions)
	return {
		wsClient,
		client,
		close: async () => {
			await Promise.all([
				new Promise((resolve) => httpServer.server.close(resolve)),
				new Promise((resolve) => {
					wss.clients.forEach((ws) => ws.close())
					wss.close(resolve)
				}),
			])
		},
		router,
		trpcClientOptions,
		httpPort,
		/**
		 * @deprecated
		 */
		port: httpPort,
		wssPort,
		httpUrl,
		wssUrl,
		applyWSSHandlerOpts,
		wssHandler,
		wss,
	}
}
