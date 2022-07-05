import { FC, ReactNode, useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { signOut } from 'next-auth/react'
import { Icon } from '@iconify/react'
interface Props {
	children: ReactNode
}

const Sidebar = ({
	showSidebar,
	handleShowSidebar,
}: {
	showSidebar: boolean
	handleShowSidebar: () => void
}) => {
	const { pathname } = useRouter()
	return (
		<>
			{showSidebar ? (
				<button
					className="fixed z-50 flex items-center text-4xl text-gray-100 cursor-pointer xl:hidden right-10 top-6"
					onClick={() => handleShowSidebar()}
				>
					x
				</button>
			) : (
				<svg
					onClick={() => handleShowSidebar()}
					className="fixed z-30 flex items-center cursor-pointer right-10 top-6"
					fill="#2563EB"
					viewBox="0 0 100 80"
					width="40"
					height="40"
				>
					<rect width="100" height="10"></rect>
					<rect y="30" width="100" height="10"></rect>
					<rect y="60" width="100" height="10"></rect>
				</svg>
			)}
			<ul
				className={`top-0 right-0 xl:w-[40vw] w-full bg-zinc-900  flex flex-col items-center space-y-10 text-gray-100 fixed h-full z-40  ease-in-out duration-300 ${
					showSidebar ? 'translate-x-0 ' : 'translate-x-full'
				}`}
			>
				<li
					className={`${
						pathname === '/search' ? 'link text-[#7928ca] mt-20' : 'link mt-20'
					}`}
				>
					<Link href="/search">Buscar GIFS</Link>
				</li>
				<li
					className={`${
						pathname === '/favourite-gifs' ? 'link text-[#7928ca]' : 'link'
					}`}
				>
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
		</>
	)
}
export const MainLayout: FC<Props> = ({ children }) => {
	const { pathname } = useRouter()
	const [showSidebar, setShowSidebar] = useState(false)
	const handleShowSidebar = () => {
		setShowSidebar((prev) => !prev)
	}
	return (
		<>
			<header className="p-5 border-b-2 border-zinc-900">
				<nav className="container flex flex-row items-center justify-between max-w-5xl mx-auto ">
					<Link href="/">
						<Icon
							icon="simple-icons:giphy"
							className="text-2xl duration-100 ease-in cursor-pointer hover:text-[#7928ca] link"
						/>
					</Link>

					<ul className="flex-row items-center hidden font-bold space-x-9 xl:flex">
						<li
							className={`${
								pathname === '/search' ? 'link text-[#7928ca]' : 'link'
							}`}
						>
							<Link href="/search">Buscar GIFS</Link>
						</li>
						<li
							className={`${
								pathname === '/favourite-gifs' ? 'link text-[#7928ca]' : 'link'
							}`}
						>
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
					<Sidebar
						handleShowSidebar={handleShowSidebar}
						showSidebar={showSidebar}
					/>
				</nav>
			</header>
			<motion.main
				key={pathname}
				exit={{ opacity: 0 }}
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				className={`min-h-screen ${showSidebar ? 'opacity-30' : 'opacity-100'}`}
			>
				{' '}
				{children}
			</motion.main>
		</>
	)
}
