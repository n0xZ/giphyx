import { FC } from 'react'
import { GIF } from '~/types'
import { GifItem } from './GifItem'
interface Props {
	gifs: GIF[]
}
export const GifList: FC<Props> = ({ gifs }) => {
	return (
		<section className="grid xl:grid-cols-3 grid-cols-1 xl:gap-6 gap-3 container mx-auto mt-6">
			{gifs.map((gif) => (
				<GifItem gif={gif} key={gif.id} />
			))}
		</section>
	)
}
