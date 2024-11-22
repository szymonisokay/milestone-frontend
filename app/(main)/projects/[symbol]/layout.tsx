'use client'

import { PageLoader } from '@/components/loaders/page-loader'
import { useProject } from '@/hooks/projects/use-project'
import { redirect, useParams, usePathname } from 'next/navigation'

const ProjectLayout = ({ children }: { children: React.ReactNode }) => {
	const symbol = useParams().symbol as string
	const pathname = usePathname()
	const { project, isLoading, isError } = useProject(symbol)

	if (isLoading) {
		return <PageLoader />
	}

	if (isError) {
		return redirect('/projects')
	}

	if (pathname === `/projects/${symbol}` && !!project) {
		return redirect(`/projects/${symbol}/board`)
	}

	return <>{children}</>
}

export default ProjectLayout
