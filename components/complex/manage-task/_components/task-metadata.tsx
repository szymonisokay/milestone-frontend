import { useManageTaskContext } from '@/components/complex/manage-task/manage-task-provider'
import { TaskStatusSelect } from '@/components/primitives/task/task-status-select'
import { UserSelect } from '@/components/primitives/user/user-select'
import { useUpdateTask } from '@/hooks/tasks/use-update-task'
import { TaskStatus } from '@/types/task'
import { User } from '@/types/user'

export const TaskMetadata = () => {
	const { task, sprintId } = useManageTaskContext()
	const { onUpdateTask } = useUpdateTask(sprintId, task?.id as string)

	const handleStatusChange = (status: TaskStatus) => {
		onUpdateTask({ status })
	}

	const handleAssigneeChange = (assignee: User | null) => {
		onUpdateTask({ assignee })
	}

	if (!task) {
		return null
	}

	return (
		<div className='flex flex-col items-start gap-2 mt-4'>
			<TaskStatusSelect
				value={task.status}
				onChange={handleStatusChange}
			/>
			<UserSelect value={task.assignee} onChange={handleAssigneeChange} />
		</div>
	)
}
