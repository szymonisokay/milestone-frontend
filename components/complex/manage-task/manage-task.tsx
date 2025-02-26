import { Breadcrumbs } from '@/components/complex/breadcrumbs'
import { BreadcrumbItem } from '@/components/complex/breadcrumbs/types'
import { TaskDescription } from '@/components/complex/manage-task/_components/task-description'
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
		<div>
			<Breadcrumbs items={items} />
			<TaskName />
			<TaskDescription />
		</div>
	)
}
