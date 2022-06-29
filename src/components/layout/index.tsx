import { FC, ReactNode } from 'react'
import { motion } from 'framer-motion'
import { NavLink, useLocation } from 'react-router-dom'
interface Props {
	children: ReactNode
}
export const MainLayout: FC<Props> = ({ children }) => {
	const { pathname } = useLocation()
	return (
		<>
			<header className="p-5 border-b-2 border-gray-200">
				<nav className="flex flex-row items-center justify-center container mx-auto">
					<ul className="flex flex-row items-center space-x-9">
						<li>
							<NavLink to="/">Home</NavLink>
						</li>
						<li>
							<NavLink to="/search">Buscar GIFS</NavLink>
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
