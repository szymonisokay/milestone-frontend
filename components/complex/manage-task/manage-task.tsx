'use client'

import { Breadcrumbs } from '@/components/complex/breadcrumbs'
import { BreadcrumbItem } from '@/components/complex/breadcrumbs/types'
import { TaskDescription } from '@/components/complex/manage-task/_components/task-description'
import { TaskMetadata } from '@/components/complex/manage-task/_components/task-metadata'
import { TaskName } from '@/components/complex/manage-task/_components/task-name'
import { useManageTaskContext } from '@/components/complex/manage-task/manage-task-provider'

export const ManageTask = () => {
	const { task } = useManageTaskContext()

	const items: BreadcrumbItem[] = [
		{
			label: 'Story ???',
		},
		{
			label: task?.identifier,
		},
	]

	return (
		<div className='grid auto-rows-max lg:grid-cols-[3fr_2fr] gap-4'>
			<div className='main-content'>
				<Breadcrumbs items={items} />
				<TaskName />
				<TaskDescription />
			</div>
			<div className='side-conten'>
				<TaskMetadata />
			</div>
		</div>
	)
}
