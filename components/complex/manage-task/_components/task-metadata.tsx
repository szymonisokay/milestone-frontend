import { useManageTaskContext } from '@/components/complex/manage-task/manage-task-provider'
import { TaskStatusSelect } from '@/components/primitives/task/task-status-select'
import { UserSelect } from '@/components/primitives/user/user-select/user-select'
import { Label } from '@/components/ui/label'
import { useUpdateTask } from '@/hooks/tasks/use-update-task'
import { UpdateTask } from '@/types/task'

export const TaskMetadata = () => {
	const { task, sprintId } = useManageTaskContext()
	const { onUpdateTask } = useUpdateTask(sprintId, task?.id as string)

	const handleTaskChange =
		<T extends keyof UpdateTask>(field: T) =>
		(value: UpdateTask[T]) => {
			onUpdateTask({ [field]: value })
		}

	if (!task) {
		return null
	}

	return (
		<div className='flex flex-col items-start gap-2 mt-4'>
			<TaskStatusSelect
				value={task.status}
				onChange={handleTaskChange('status')}
			/>

			<div className='border rounded-md p-2 w-full'>
				<div className='flex items-center gap-1 w-full'>
					<Label>Assignee</Label>
					<div className='ml-auto w-[250px]'>
						<UserSelect
							withUnassigned
							value={task.assignee?.id}
							onChange={handleTaskChange('assigneeId')}
						/>
					</div>
				</div>
			</div>
		</div>
	)
}
