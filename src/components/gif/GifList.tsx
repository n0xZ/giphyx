import { FC } from 'react'
import { GIF } from '~/types'
import { GifItem } from './GifItem'
interface Props {
	gifs: GIF[]
}
export const GifList: FC<Props> = ({ gifs }) => {
	return (
		<section className="container grid grid-cols-1 gap-3 p-3 mx-auto mt-6 xl:grid-cols-4 xl:gap-6">
			{gifs.map((gif) => (
				<GifItem gif={gif} key={gif.embed_url} />
			))}
		</section>
	)
}
