import { FC } from 'react'
import { Link } from 'react-router-dom'
import { Data } from '~/types'
interface Props {
	category: Data
}
const CategoryItem: FC<Props> = ({ category }) => {
	return (
		<Link
			to={`/search/results/${category.name}`}
			className=" w-full rounded-xl shadow-xl hover:opacity-90 ease-in-out duration-150"
		>
			<aside className="grid place-items-center ">
				<h3 className="text-center font-bold text-2xl">{category.name}</h3>
				<img
					src={category.gif.images['480w_still'].url}
					className="object-cover"
					alt={category.gif.slug}
				/>
			</aside>
		</Link>
	)
}

export default CategoryItem
