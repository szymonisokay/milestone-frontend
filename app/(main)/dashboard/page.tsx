'use client'

import { redirect } from 'next/navigation'

import { PageLoader } from '@/components/loaders/page-loader'
import { useConfiguration } from '@/hooks/use-configuration'

const DashboardPage = () => {
	const { data, isLoading } = useConfiguration()

	if (isLoading) {
		return <PageLoader />
	}

	if (!data?.teamId) {
		return redirect('/onboarding')
	}

	return <div>Dashboard</div>
}

export default DashboardPage
