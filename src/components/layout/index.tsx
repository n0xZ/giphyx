import { FC, ReactNode } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'
interface Props {
	children: ReactNode
}
export const MainLayout: FC<Props> = ({ children }) => {
	const { pathname } = useRouter()
	return (
		<>
			<header className="p-5 border-b-2 border-zinc-900">
				<nav className="container flex flex-row items-center justify-center mx-auto">
					<ul className="flex flex-row items-center font-bold space-x-9">
						<li>
							<Link href="/">Home</Link>
						</li>
						<li>
							<Link href="/search">Buscar GIFS</Link>
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
