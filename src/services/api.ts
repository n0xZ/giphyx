import { Category, GIF, SearchResultsI } from '~/types'

const API_KEY = String(import.meta.env.VITE_GIPHY_API_KEY)
const API_URL = String(import.meta.env.VITE_GIPHY_API_URL)

export const getCategories = async () => {
	const response = await fetch(`${API_URL}/categories?api_key=${API_KEY}`)
	const data: Category = await response.json()
	return data
}

export const getSearchResultsByQuery = async (query: string) => {
	const response = await fetch(
		`${API_URL}/search?api_key=${API_KEY}&q=${query}&limit=25&offset=0&rating=g&lang=en`
	)
	const data: SearchResultsI = await response.json()
	return data
}

export const getGIFById = async () => {
	const response = await fetch(`${API_URL}/categories?api_key=${API_KEY}`)
	const data: GIF = await response.json()
	return data
}
