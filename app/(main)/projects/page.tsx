'use client'

import { DataTable } from '@/components/complex/data-table/data-table'
import { Heading } from '@/components/primitives/heading'
import { Button } from '@/components/ui/button'
import { useProjects } from '@/hooks/projects/use-projects'
import { useProjectsTable } from '@/hooks/projects/use-projects-table'
import { useModal } from '@/hooks/use-modal'

const ProjectsPage = () => {
	const { onOpen } = useModal()
	const { projects } = useProjects()
	const { headers, renderRow } = useProjectsTable()

	return (
		<div className='space-y-4 p-4'>
			<div className='flex items-center justify-between'>
				<Heading title='Projects' />
				<Button onClick={() => onOpen('add-project')}>
					Create Project
				</Button>
			</div>

			<DataTable
				headers={headers}
				rows={projects}
				renderRow={renderRow}
			/>
		</div>
	)
}

export default ProjectsPage
