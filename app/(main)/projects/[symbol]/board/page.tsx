'use client'

import { FolderOpenIcon } from 'lucide-react'
import { useParams } from 'next/navigation'

import { BreadcrumbItem } from '@/components/complex/breadcrumbs/types'
import { PageHeader } from '@/components/complex/page-header'
import { useProject } from '@/hooks/projects/use-project'

const BoardPage = () => {
	const symbol = useParams().symbol as string
	const { project, isLoading } = useProject(symbol)

	const breadcrumbs: BreadcrumbItem[] = [
		{
			label: project?.name,
			href: `/projects/${project?.symbol}`,
			icon: FolderOpenIcon,
			isLoading,
		},
		{
			label: 'Board',
		},
	]

	return (
		<>
			<PageHeader breadcrumbs={breadcrumbs} title='Board' />
		</>
	)
}
export default BoardPage