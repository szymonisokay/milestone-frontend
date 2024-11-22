'use client'

import { PageLoader } from '@/components/loaders/page-loader'
import { useConfiguration } from '@/hooks/use-configuration'
import { redirect } from 'next/navigation'

const OnboardingPage = () => {
	const { data, isLoading } = useConfiguration()

	if (isLoading) {
		return <PageLoader />
	}

	if (data?.workspaceId) {
		return redirect('/dashboard')
	}

	return redirect('/onboarding/details')
}

export default OnboardingPage
