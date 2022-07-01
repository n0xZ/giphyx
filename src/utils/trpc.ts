import { createReactQueryHooks } from '@trpc/react'
import type { AppRouter } from '~/backend/routers/_app'

export const trpc = createReactQueryHooks<AppRouter>()
