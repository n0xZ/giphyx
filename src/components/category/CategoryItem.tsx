import { FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Data } from '~/types'
interface Props {
	category: Data
}
const CategoryItem: FC<Props> = ({ category }) => {
	return (
		<Link
			href={`/search/results/${category.name}`}
			className=" w-full rounded-xl shadow-xl hover:opacity-90 ease-in-out duration-150"
		>
			<aside className="grid place-items-center ">
				<h3 className="text-center font-bold text-2xl">{category.name}</h3>
				<Image
					src={category.gif.images['480w_still'].url}
					className="object-cover"
					width={category.gif.images['480w_still'].width}
					height={category.gif.images['480w_still'].height}
					alt={category.gif.slug}
				/>
			</aside>
		</Link>
	)
}

export default CategoryItem
