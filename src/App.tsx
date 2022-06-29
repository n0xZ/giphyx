import { Route, Routes } from 'react-router-dom'

import Home from './views/Home'
import Search from './views/search/SearchPage'
import SearchGifByCategory from './views/search/SearchGifByCategory'
import SearchGifByName from './views/search/SearchGifByName'

function App() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/search" element={<Search />} />
			<Route path="/search/name" element={<SearchGifByName />} />
			<Route path="/search/category" element={<SearchGifByCategory />} />
		</Routes>
	)
}

export default App
