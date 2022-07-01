import React, { useState, ChangeEvent } from 'react'
import { MainLayout } from '~/components/layout'

const SearchGifByName = () => {
	const [searchQuery, setSearchQuery] = useState('')
	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { target } = e
		setSearchQuery(target.value)
	}
	return (
		<MainLayout>
			<form>
				<input type="text" value={searchQuery} onChange={handleChange} />
			</form>
		</MainLayout>
	)
}

export default SearchGifByName
