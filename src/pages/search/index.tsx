import { NextPage } from 'next'
import { useSession } from 'next-auth/react'
import Head from 'next/head'
import Link from 'next/link'
import { MainLayout } from '~/components/layout'
import ProtectedContent from '~/components/protected/ProtectedContent'

const SearchPage: NextPage = () => {
	const { data: session } = useSession()
	if (!session) return <ProtectedContent />
	return (
		<MainLayout>
			<Head>
				<title>Giphyx - Buscar gifs</title>
			</Head>{' '}
			<h2 className="mt-6 text-center">
				Cómo desea realizar la busqueda de GIFS?
			</h2>
			<section className="container flex flex-col items-center h-screen grid-cols-2 mx-auto x:flex-row ">
				<article className="grid gap-3 place-items-center">
					<button className="bg-gradient-to-r p-[1px] from-[#7928ca] to-[#ff0080] rounded-xl hover:opacity-60">
						<Link href="/search/category">
							<aside className="p-5 dark:bg-zinc-900 rounded-xl">
								Buscar por categoría
							</aside>
						</Link>
					</button>
				</article>

				<article className="grid gap-3 place-items-center">
					<button className="bg-gradient-to-r p-[1px] from-[#7928ca] to-[#ff0080] rounded-xl hover:opacity-60">
						<Link href="/search/name">
							<aside className="p-5 dark:bg-zinc-900 rounded-xl">
								Buscar por nombre
							</aside>
						</Link>
					</button>
				</article>
			</section>
		</MainLayout>
	)
}

export default SearchPage
