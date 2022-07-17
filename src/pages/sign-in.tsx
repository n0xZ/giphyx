import { NextPage } from 'next'
import Image from 'next/future/image'
import { signIn } from 'next-auth/react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'
import { Icon } from '@iconify/react'
import SignInAsset from '~/public/sign-in-asset.svg'
import Head from 'next/head'
const SignIn: NextPage = () => {
	const { data: session, status } = useSession()
	const router = useRouter()
	if (session) router.push('/search')
	return (
		<motion.main
			key={router.pathname}
			exit={{ opacity: 0 }}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			className="flex flex-col items-center justify-center min-h-screen mt-12 space-y-6"
		>
			<Head>
				<title>Giphyx - Iniciar sesión</title>
			</Head>
			<Image
				className="w-3/4 rounded-xl bg-gradient-to-r p-[2px] from-[#7928ca] to-[#ff0080] "
				src={SignInAsset.src}
				width={SignInAsset.width}
				priority={true}
				height={SignInAsset.height}
			/>
			<h2 className="text-xl font-bold text-center">
				Para poder acceder a Giphyx, se debe iniciar sesión.
			</h2>
			<button
				data-test="signUpButton"
				disabled={status === 'loading'}
				className="flex flex-row items-center px-5 py-5 mb-6 space-x-3 font-bold text-center ease-in border-2 rounded-lg border-zinc-800 hover:opacity-80"
				onClick={() => signIn('github')}
			>
				<Icon icon="akar-icons:github-fill" />
				<span>Iniciar sesión desde Github</span>
			</button>
		</motion.main>
	)
}

export default SignIn
