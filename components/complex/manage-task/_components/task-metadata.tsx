import { useManageTaskContext } from '@/components/complex/manage-task/manage-task-provider'
import { TaskStatusSelect } from '@/components/primitives/task/task-status-select'
import { UserSelect } from '@/components/primitives/user/user-select'

export const TaskMetadata = () => {
	const { task } = useManageTaskContext()

	if (!task) {
		return null
	}

	return (
		<div className='flex flex-col items-start gap-2 mt-4'>
			<TaskStatusSelect value={task?.status} />
			<UserSelect />
		</div>
	)
}
