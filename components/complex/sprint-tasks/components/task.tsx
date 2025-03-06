import { MoreVerticalIcon } from 'lucide-react'

import { Text } from '@/components/primitives/text'
import { Button } from '@/components/ui/button'
import { useModal } from '@/hooks/use-modal'
import { Task as TaskType } from '@/types/task'

import { Menu } from './menu'

type Props = {
	sprintId: string
	task: TaskType
}

export const Task = ({ sprintId, task }: Props) => {
	const { onOpen } = useModal()

	const onOpenManageTaskModal = () => {
		onOpen('manage-task', { taskId: task.id, sprintId })
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

			<Menu taskId={task.id} sprintId={sprintId}>
				<Button className='bg-gray-50/50 hover:bg-gray-100 shadow-none text-slate-800 p-1 h-auto rounded-[6px]'>
					<MoreVerticalIcon />
				</Button>
			</Menu>
		</div>
	)
}
