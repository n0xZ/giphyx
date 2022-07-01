import { FC } from 'react'
interface Props {
	error: string | undefined
}
export const FetchError: FC<Props> = ({ error }) => {
	return (
		<article>
			<p>Ha ocurrido un error. {error}</p>
		</article>
	)
}
