'use client'

import { FolderOpenIcon } from 'lucide-react'
import { useParams } from 'next/navigation'

import { BreadcrumbItem } from '@/components/complex/breadcrumbs/types'
import { PageHeader } from '@/components/complex/page-header'
import { ProjectBoard } from '@/components/complex/project-board/project-board'
import { useProject } from '@/hooks/projects/use-project'
import { useActiveSprint } from '@/hooks/sprints/use-active-sprint'

const BoardPage = () => {
	const symbol = useParams().symbol as string
	const { project, isLoading } = useProject(symbol)
	const { sprint } = useActiveSprint(project?.id ?? '')

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
			<PageHeader
				breadcrumbs={breadcrumbs}
				title={sprint?.name ?? 'Board'}
			/>

			{!sprint && (
				<div className='flex items-center justify-center mt-10'>
					<p className='text-sm text-gray-500'>
						No active sprint found
					</p>
				</div>
			)}

			{sprint && project && (
				<ProjectBoard project={project} sprint={sprint} />
			)}
		</>
	)
}
export default BoardPage
