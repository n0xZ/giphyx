import { FC } from 'react'
interface Props {
	error?: string | undefined
	customError?: string
}
export const FetchError: FC<Props> = ({ error, customError }) => {
	return (
		<article>
			<p>Ha ocurrido un error. {customError ? customError : error}</p>
		</article>
	)
}
