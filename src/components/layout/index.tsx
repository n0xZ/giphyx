import { FC, ReactNode } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { signOut } from 'next-auth/react'
import { Icon } from '@iconify/react'
interface Props {
	children: ReactNode
}
export const MainLayout: FC<Props> = ({ children }) => {
	const { pathname } = useRouter()
	return (
		<>
			<header className="p-5 border-b-2 border-zinc-900">
				<nav className="container flex flex-row items-center justify-between max-w-5xl mx-auto">
					<Link href="/">
						<Icon
							icon="simple-icons:giphy"
							className="text-2xl duration-100 ease-in cursor-pointer hover:text-purple-800 link"
						/>
					</Link>

					<ul className="flex flex-row items-center font-bold space-x-9">
						<li className="link">
							<Link href="/search">Buscar GIFS</Link>
						</li>
						<li className="link">
							<Link href="/favourite-gifs">Mis GIFS favoritos</Link>
						</li>
						<li className="link">
							<button
								onClick={() => signOut()}
								className="px-3 py-3 duration-100 border-2 border-zinc-800 rounded-xl hover:border-zinc-600 opacity-80"
							>
								Cerrar sesión
							</button>
						</li>
					</ul>
				</nav>
			</header>
			<motion.main
				key={pathname}
				exit={{ opacity: 0 }}
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				className="min-h-screen"
			>
				{' '}
				{children}
			</motion.main>
		</>
	)
}
