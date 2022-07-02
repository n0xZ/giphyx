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
			href={`/results/${category.name_encoded}`}
			className="w-full duration-150 ease-in-out shadow-xl  rounded-xl hover:opacity-90"
		>
			<aside className="grid place-items-center ">
				<h3 className="text-2xl font-bold text-center">{category.name}</h3>
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
