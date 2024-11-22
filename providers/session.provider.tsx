'use client'

import { PageLoader } from '@/components/loaders/page-loader'
import { NoAccess } from '@/components/primitives/no-access'
import { useSession } from '@/hooks/use-session'
import { PropsWithChildren } from 'react'

export const SessionProvider = ({ children }: PropsWithChildren) => {
	const { isLoading, isError } = useSession()

	if (isLoading) {
		return <PageLoader />
	}

	if (isError) return <NoAccess />

	return <>{children}</>
}
