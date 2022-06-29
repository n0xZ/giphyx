import { FC } from 'react'
import { Data } from '~/types'
interface Props {
	category: Data
}
const CategoryItem: FC<Props> = ({ category }) => {
	return (
		<aside className=" w-full rounded-xl shadow-xl grid place-items-center ">
			<h3 className="text-center font-bold text-2xl">{category.name}</h3>
			<img
				src={category.gif.images['480w_still'].url}
				className="object-cover"
				alt={category.gif.slug}
			/>
		</aside>
	)
}

export default CategoryItem
