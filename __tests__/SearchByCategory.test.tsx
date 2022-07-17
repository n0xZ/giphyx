import type { ReactNode } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { konn } from 'konn'
import { render, screen, renderHook } from '@testing-library/react'
import CategoryList from '~/components/category/CategoriesList'

import { trpc } from '~/utils/trpc'
import { createReactQueryHooks } from '@trpc/react'
import { AppRouter } from '~/backend/routers/_app'

const ctx = konn().beforeEach(() => {
	const queryClient = new QueryClient()
	const trpc = createReactQueryHooks<AppRouter>()
	return {
		queryClient,
		trpc,
	}
})

describe('Category List test case', () => {
	it('Renders the component with default content', async () => {



		
	})
})
