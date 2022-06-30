import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { QueryClientProvider, QueryClient } from 'react-query'
import { AnimatePresence } from 'framer-motion'
import App from './App'
import 'uno.css'
import '@unocss/reset/tailwind.css'

const client = new QueryClient()
ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<BrowserRouter>
			<AnimatePresence exitBeforeEnter>
				<QueryClientProvider client={client}>
					<App />
				</QueryClientProvider>
			</AnimatePresence>
		</BrowserRouter>
	</React.StrictMode>
)
