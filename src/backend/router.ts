import * as trpc from '@trpc/server'
import superjson from 'superjson'
export const createRouter = () => {
	return trpc.router().transformer(superjson)
}
