import { NextPage } from 'next'
import { signIn } from 'next-auth/react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'
const SignIn: NextPage = () => {
	const { data: session } = useSession()
	const router = useRouter()
	if (session) router.push('/search')
	return (
		<motion.main
			key={router.pathname}
			exit={{ opacity: 0 }}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			className="grid min-h-screen place-items-center"
		>
			<h2>Para poder acceder a Giphyx, se debe iniciar sesión.</h2>
			<button onClick={() => signIn('github')}>
				Iniciar sesión desde Github
			</button>
		</motion.main>
	)
}

export default SignIn
