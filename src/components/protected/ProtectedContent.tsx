import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { MainLayout } from '../layout'

const ProtectedContent = () => {
	const [timer, setTimer] = useState(3)
	const router = useRouter()

	useEffect(() => {
		const timer = setTimeout(() => {
			setTimer((prev) => prev - 1)
		}, 700)
		return () => clearTimeout(timer)
	})
	if (timer === 0) router.push('/sign-in')
	return (
		<MainLayout>
			<section className="mt-2">
				<p>
					Tienes que iniciar sesión para poder ver el contenido. Serás
					reedirigido en {timer}
				</p>
			</section>
		</MainLayout>
	)
}

export default ProtectedContent
