import { FC, useState } from 'react'
import Image from 'next/future/image'
import { GIF } from '~/types'

interface Props {
	gif: GIF
}
export const GifItem: FC<Props> = ({ gif }) => {
	const [src, setSrc] = useState(gif.images.downsized.url)
	const handleFallbackSRC = () => {
		setSrc(gif.images.original.url)
	}
	return (
		<article className="flex flex-col justify-center ">
			<Image
				src={src}
				className="rounded-xl w-full bg-gradient-to-r p-[2px] from-[#7928ca] to-[#ff0080]"
				placeholder="blur"
				blurDataURL={gif.images.downsized.url}
				width={gif.images.downsized.width}
				onError={() => handleFallbackSRC()}
				height={gif.images.downsized.height}
				alt={gif.title}
			/>
		</article>
	)
}
