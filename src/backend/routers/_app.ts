import { createRouter } from '../router'
import { categoriesRouter } from './categories'
import { gifsRouter } from './gifs'

export const appRouter = createRouter()
	.merge('cat.', categoriesRouter)
	.merge('gifs.', gifsRouter)

export type AppRouter = typeof appRouter
