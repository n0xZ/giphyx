import { createRouter } from '../router'
import { Category } from '~/types'
const API_KEY = String(process.env.GIPHY_API_KEY)
const API_URL = String(process.env.GIPHY_API_URL)

export const categoriesRouter = createRouter().query('getCategories', {
	async resolve() {
		const response = await fetch(`${API_URL}/categories?api_key=${API_KEY}`)
		const data: Category = await response.json()
		return data
	},
})
