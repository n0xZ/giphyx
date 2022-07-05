import { NextPage } from 'next'
import { signIn } from 'next-auth/react'
const SignIn: NextPage = () => {
	return (
		<main className="grid min-h-screen place-items-center">
			<button onClick={() => signIn('github')}>
				Iniciar sesión desde Github
			</button>
		</main>
	)
}

export default SignIn
