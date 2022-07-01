import { FC } from 'react'
import { GIF } from '~/types'

interface Props {
	gif: GIF
}
export const GifItem: FC<Props> = ({ gif }) => {
	return (
		<aside>
			<h3 className="text-center font-bold text-2xl">{gif.title}</h3>
			<img
				src={gif.images.downsized.url}
				className="object-cover"
				alt={gif.title}
			/>
		</aside>
	)
}
