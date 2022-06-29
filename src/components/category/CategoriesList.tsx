import { FC } from 'react'
import { Data } from '~/types'
import CategoryItem from './CategoryItem'

interface Props {
	categories: Data[]
}

const Categorieslist: FC<Props> = ({ categories }) => {
	return (
		<section className="grid xl:grid-cols-3 grid-cols-1 xl:gap-6 gap-3 container mx-auto">
			{categories.map((category, index) => (
				<CategoryItem category={category} key={index} />
			))}
		</section>
	)
}

export default Categorieslist
