import { z } from 'zod'
import { createRouter } from '../router'
import { GIF, SearchResultsI } from '~/types'
const API_KEY = String(process.env.GIPHY_API_KEY)
const API_URL = String(process.env.GIPHY_API_URL)

export const gifsRouter = createRouter()
	.query('getGIFByID', {
		async resolve() {
			const response = await fetch(`${API_URL}/categories?api_key=${API_KEY}`)
			const data: GIF = await response.json()
			return data
		},
	})
	.query('getGIFByResults', {
		input: z.object({ query: z.string() }),
		async resolve({ input }) {
			const response = await fetch(
				`${API_URL}/search?api_key=${API_KEY}&q=${input.query}&limit=5&offset=0&rating=g&lang=en`
			)
			const data: SearchResultsI = await response.json()
			return data
		},
	})
