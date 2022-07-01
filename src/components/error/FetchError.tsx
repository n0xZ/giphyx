import { FC } from 'react'
interface Props {
	error: Error
}
export const FetchError: FC<Props> = ({ error }) => {
	return (
		<article>
			<p>Ha ocurrido un error. {error.message}</p>
		</article>
	)
}
