import { NextPage } from 'next'
import { useSession } from 'next-auth/react'
import Image from 'next/future/image'
import Head from 'next/head'
import Link from 'next/link'
import { MainLayout } from '~/components/layout'
import ProtectedContent from '~/components/protected/ProtectedContent'
import CategoriesSearchAsset from '~/public/search-category.svg'
import NameSearchAsset from '~/public/search-name.svg'
const SearchPage: NextPage = () => {
	const { data: session } = useSession()
	if (!session) return <ProtectedContent />
	return (
		<MainLayout>
			<Head>
				<title>Giphyx - Buscar gifs</title>
			</Head>{' '}
			<h2 className="mt-6 text-2xl font-bold text-center">
				Bienvenido, {session.user?.name}. Cómo desea realizar la busqueda de
				GIFS?
			</h2>
			<section className="container flex flex-col items-center justify-center h-screen grid-cols-2 mx-auto space-y-5 xl:space-x-5 xl:space-y-0 xl:flex-row xl:justify-center ">
				<article className="grid gap-3 p-2 duration-100 ease-in border-2 border-black place-items-center hover:-translate-y-1 rounded-xl hover:border-zinc-900">
					<Image
						className="w-3/4 "
						src={CategoriesSearchAsset.src}
						width={CategoriesSearchAsset.width}
						priority={true}
						height={CategoriesSearchAsset.height}
					/>

					<button className="bg-gradient-to-r p-[1px] from-[#7928ca] to-[#ff0080] rounded-xl hover:opacity-60">
						<Link href="/search/category">
							<aside className="p-5 font-bold dark:bg-black rounded-xl">
								Buscar por categoría
							</aside>
						</Link>
					</button>
				</article>

				<article className="grid gap-3 p-3 duration-100 ease-in border-2 border-black place-items-center hover:-translate-y-1 rounded-xl hover:border-zinc-900">
					<Image
						className="w-3/4 dark:bg-black rounded-xl"
						src={NameSearchAsset.src}
						width={NameSearchAsset.width}
						priority={true}
						height={NameSearchAsset.height}
					/>
					<button className="bg-gradient-to-r p-[1px] from-[#7928ca] to-[#ff0080] rounded-xl hover:opacity-60">
						<Link href="/search/name">
							<aside className="p-5 font-bold dark:bg-black rounded-xl">
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
