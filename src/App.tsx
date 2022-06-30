import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import loadable from '@loadable/component'
import Home from './views/Home'

const Search = loadable(() => import('./views/search/SearchPage'))
const SearchGifByName = loadable(() => import('./views/search/SearchGifByName'))
const SearchGifByCategory = loadable(
	() => import('./views/search/SearchGifByCategory')
)
const SearchResults = loadable(
	() => import('./views/search/results/SearchResults')
)

function App() {
	return (
		<Routes>
			<Route
				index
				element={
					<Suspense fallback={<div>Cargando home...</div>}>
						<Home />
					</Suspense>
				}
			/>
			<Route path="/search" element={<Search />} />
			<Route path="/search/name" element={<SearchGifByName />} />
			<Route path="/search/category" element={<SearchGifByCategory />} />
			<Route path="/search/results/:query" element={<SearchResults />} />
		</Routes>
	)
}

export default App
