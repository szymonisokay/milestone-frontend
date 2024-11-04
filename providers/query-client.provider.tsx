'use client'

import {
	QueryClient,
	QueryClientProvider as ReactQueryClientProvider,
} from '@tanstack/react-query'
import { PropsWithChildren } from 'react'

const queryClient = new QueryClient()

export const QueryClientProvider = ({ children }: PropsWithChildren) => (
	<ReactQueryClientProvider client={queryClient}>
		{children}
	</ReactQueryClientProvider>
)
