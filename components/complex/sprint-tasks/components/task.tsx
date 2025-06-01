import { MoreVerticalIcon } from 'lucide-react'

import { TaskStatusSelect } from '@/components/primitives/task/task-status-select'
import { Text } from '@/components/primitives/text'
import { UserSelect } from '@/components/primitives/user/user-select/user-select'
import { Button } from '@/components/ui/button'
import { useUpdateTask } from '@/hooks/tasks/use-update-task'
import { useModal } from '@/hooks/use-modal'
import { Task as TaskType, UpdateTask } from '@/types/task'

import { Menu } from './menu'

type Props = {
	sprintId: string
	task: TaskType
}

export const Task = ({ sprintId, task }: Props) => {
	const { onOpen } = useModal()
	const { onUpdateTask } = useUpdateTask(sprintId, task.id)

	const onOpenManageTaskModal = () => {
		onOpen('manage-task', { taskId: task.id, sprintId })
	}

	const handleTaskChange =
		<T extends keyof UpdateTask>(field: T) =>
		(value: UpdateTask[T]) => {
			onUpdateTask({ [field]: value })
		}

	return (
		<div
			onClick={onOpenManageTaskModal}
			className='flex items-center justify-between p-2 border-b hover:bg-gray-100 last-of-type:border-b-0'
		>
			<div className='flex items-center space-x-2'>
				<div className='bg-white rounded-[8px] px-2 border'>
					<Text className='text-[12px]'>{task.identifier}</Text>
				</div>
				<Text>{task.name}</Text>
			</div>

			<div className='flex items-center gap-2 ml-auto mr-2'>
				<TaskStatusSelect
					value={task.status}
					onChange={handleTaskChange('status')}
					components={{
						button: {
							className: 'py-1 px-3 text-[12px] h-auto',
						},
						menuItem: {
							className: 'text-[12px]',
						},
					}}
				/>
				<UserSelect
					withUnassigned
					onlyAvatar
					value={task.assignee?.id}
					onChange={handleTaskChange('assigneeId')}
				/>
			</div>

			<Menu taskId={task.id} sprintId={sprintId}>
				<Button
					variant='outline'
					className='hover:bg-gray-100 shadow-none text-slate-800 p-1 h-auto rounded-[6px]'
				>
					<MoreVerticalIcon />
				</Button>
			</Menu>
		</div>
	)
}
