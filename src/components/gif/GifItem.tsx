import Image from 'next/future/image'
import { FC, useState } from 'react'
import { GIF } from '~/types'
import { toast } from 'react-hot-toast'
interface Props {
	gif: GIF
}
export const GifItem: FC<Props> = ({ gif }) => {
	const [src, setSrc] = useState(gif.images.downsized.url)
	const handleFallbackSRC = () => {
		setSrc(gif.images.original.url)
	}
	const saveGIF = (gif: GIF) => {
		if (localStorage.getItem('favourite-gifs') === null) {
			const newFavouriteGifs = [] as GIF[]
			newFavouriteGifs.push(gif)
			localStorage.setItem('favourite-gifs', JSON.stringify(newFavouriteGifs))
			toast.success('GIF agregado con éxito')
		} else {
			const favouriteGifs = JSON.parse(
				String(localStorage.getItem('favourite-gifs'))
			) as GIF[]

			favouriteGifs.push(gif)
			localStorage.setItem('favourite-gifs', JSON.stringify(favouriteGifs))
			toast.success('GIF agregado con éxito')
		}
	}

	return (
		<article className="flex flex-col justify-center space-y-3">
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
				className=" rounded-xl w-full bg-gradient-to-r p-[2px] from-[#7928ca] to-[#ff0080] hover:opacity-80"
				onClick={() => saveGIF(gif)}
				
			>
				<aside className="px-[1px] py-[1px] bg-black rounded-xl"> ❤</aside>
			</button>
		</article>
	)
}
