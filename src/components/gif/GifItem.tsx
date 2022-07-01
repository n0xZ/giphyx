import { FC } from 'react'
import Image from 'next/image'
import { GIF } from '~/types'

interface Props {
	gif: GIF
}
export const GifItem: FC<Props> = ({ gif }) => {
	return (
		<aside>
			<h3 className="text-center font-bold text-2xl">{gif.title}</h3>
			<Image
				src={gif.images.downsized.url}
				className="object-cover"
				width={gif.images.downsized.width}
				height={gif.images.downsized.height}
				alt={gif.title}
			/>
		</aside>
	)
}
