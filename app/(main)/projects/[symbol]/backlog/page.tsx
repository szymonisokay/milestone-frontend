'use client'

import { FolderOpenIcon } from 'lucide-react'
import { useParams } from 'next/navigation'

import { BreadcrumbItem } from '@/components/complex/breadcrumbs/types'
import { PageHeader } from '@/components/complex/page-header'
import { SprintTasksGroup } from '@/components/complex/sprint-tasks-group'
import { useProject } from '@/hooks/projects/use-project'
import { useSprints } from '@/hooks/sprints/use-sprints'

const BacklogPage = () => {
	const symbol = useParams().symbol as string
	const { project, isLoading } = useProject(symbol)
	const { sprints } = useSprints(project?.id ?? '')

	const breadcrumbs: BreadcrumbItem[] = [
		{
			label: project?.name,
			href: `/projects/${project?.symbol}`,
			icon: FolderOpenIcon,
			isLoading,
		},
		{
			label: 'Backlog',
		},
	]

	return (
		<>
			<PageHeader breadcrumbs={breadcrumbs} title='Backlog' />
			<div className='p-4 space-y-4'>
				{sprints?.map((sprint) => (
					<SprintTasksGroup key={sprint.id} sprint={sprint} />
				))}
			</div>
		</>
	)
}

export default BacklogPage
