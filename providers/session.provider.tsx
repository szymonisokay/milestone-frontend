'use client'

import { PageLoader } from '@/components/loaders/page-loader'
import { useSession } from '@/hooks/use-session'
import Link from 'next/link'
import { PropsWithChildren } from 'react'

export const SessionProvider = ({ children }: PropsWithChildren) => {
	const { isLoading, isError } = useSession()

	if (isLoading) {
		return <PageLoader />
	}

	if (isError)
		return (
			<div>
				You don't have access to this page
				<Link href='/sign-in'>Sign In</Link>
			</div>
		)

	return <>{children}</>
}
