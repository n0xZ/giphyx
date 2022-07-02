import { z } from 'zod'
import { createRouter } from '../router'
import { GIF, SearchResultsI } from '~/types'
const API_KEY = String(process.env.GIPHY_API_KEY)
const API_URL = String(process.env.GIPHY_API_URL)

export const gifsRouter = createRouter()
	.query('gif-by-id', {
		async resolve() {
			const response = await fetch(`${API_URL}/categories?api_key=${API_KEY}`)
			const data: GIF = await response.json()
			return data
		},
	})
	.query('gif-search-results', {
		input: z.object({ query: z.string() }),
		async resolve({ input }) {
			const response = await fetch(
				`${API_URL}/search?api_key=${API_KEY}&q=${input.query}&limit=25&offset=0&rating=g&lang=en`
			)
			const data: SearchResultsI = await response.json()
			return data
		},
	})
