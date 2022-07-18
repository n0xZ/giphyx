import { FC, useState } from 'react'
import Link from 'next/link'
import Image from 'next/future/image'
import { Data } from '~/types'
interface Props {
	category: Data
}
const CategoryItem: FC<Props> = ({ category }) => {
	const [src, setSrc] = useState(category.gif.images['480w_still'].url)
	const handleFallbackSRC = () => {
		setSrc(category.gif.images.original.url)
	}
	return (
		<Link href={`/results/${category.name_encoded}`} >
			<article className="flex flex-col justify-center w-full shadow-xl rounded-xl hover:opacity-80" data-test={`category ${category.name}`}>
				<h3 className="text-2xl font-bold text-center">{category.name}</h3>
				<Image
					src={src}
					className="rounded-xl w-full bg-gradient-to-r p-[3px] from-[#3a6186] to-[#89253e]"
					placeholder="blur"
					blurDataURL={category.gif.images['480w_still'].url}
					onError={() => handleFallbackSRC()}
					width={category.gif.images['480w_still'].width}
					height={category.gif.images['480w_still'].height}
					alt={category.gif.slug}
				/>
			</article>
		</Link>
	)
}

export default CategoryItem
