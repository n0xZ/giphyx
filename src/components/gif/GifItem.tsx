import Image from 'next/future/image'
import { FC, useState } from 'react'
import { GIF } from '~/types'

interface Props {
	gif: GIF
}
export const GifItem: FC<Props> = ({ gif }) => {
	const [src, setSrc] = useState(gif.images.downsized.url)
	const handleFallbackSRC = () => {
		setSrc(gif.images.original.url)
	}
	const saveGIF = (gif: GIF) => {
		if (typeof localStorage.getItem('selected-gifs') !== null) {
			const selectedGifs = JSON.parse(
				String(localStorage.getItem('favourite-gifs'))
			) as GIF[]

			selectedGifs.push(gif)
			localStorage.setItem('selected-gifs', JSON.stringify(selectedGifs))
		}
		const newSelectedGifs = [] as GIF[]
		newSelectedGifs.push(gif)
		localStorage.setItem('selected-gifs', JSON.stringify(newSelectedGifs))
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
			<button
				className="px-2 py-2 rounded-xl w-full bg-gradient-to-r p-[2px] from-[#7928ca] to-[#ff0080]"
				onClick={() => saveGIF(gif)}
			>
				❤
			</button>
		</article>
	)
}
