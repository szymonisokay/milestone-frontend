import { TaskStatusSelect } from '@/components/primitives/task/task-status-select'
import { UserSelect } from '@/components/primitives/user/user-select/user-select'
import { useUpdateTask } from '@/hooks/tasks/use-update-task'
import { Task as TaskType, UpdateTask } from '@/types/task'

type Props = {
	task: TaskType
	sprintId: string
}

export const BoardTask = ({ task, sprintId }: Props) => {
	const { onUpdateTask } = useUpdateTask(sprintId, task.id)

	const handleTaskUpdate =
		<T extends keyof UpdateTask>(field: T) =>
		(value: UpdateTask[T]) => {
			onUpdateTask({ [field]: value })
		}

	return (
		<div className='bg-white p-2 rounded-md shadow-sm'>
			<p>{task.name}</p>
			<UserSelect
				onlyAvatar
				withUnassigned
				value={task.assignee?.id ?? null}
				onChange={handleTaskUpdate('assigneeId')}
			/>
			<TaskStatusSelect
				value={task.status}
				onChange={handleTaskUpdate('status')}
			/>
		</div>
	)
}
