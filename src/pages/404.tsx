import Image from 'next/future/image'
import Head from 'next/head'
import Link from 'next/link'
import { MainLayout } from '~/components/layout'
import Asset404 from '~/public/404.svg'
const Page404 = () => {
	return (
		<MainLayout>
			<Head>
				<title>Giphyx - Página no encontrada</title>
			</Head>
			<section className="flex flex-col items-center justify-center min-h-screen space-y-3">
				<Image
					className="rounded-xl bg-gradient-to-r p-[2px] bg-black"
					width={500}
					height={500}
					src={Asset404.src}
					priority={true}
				/>
				<h1 className="text-xl font-bold">
					Ups! Al parecer esta página no existe
				</h1>
				<Link href="/search">Volver atrás</Link>
			</section>
		</MainLayout>
	)
}

export default Page404
