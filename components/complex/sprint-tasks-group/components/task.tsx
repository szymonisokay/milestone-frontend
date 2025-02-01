import { Text } from '@/components/primitives/text'
import { Button } from '@/components/ui/button'
import { Task as TaskType } from '@/types/task'
import { MoreVerticalIcon } from 'lucide-react'

type Props = {
	task: TaskType
}

export const Task = ({ task }: Props) => {
	return (
		<div className='flex items-center justify-between hover:bg-gray-100 p-2 border-b last-of-type:border-b-0'>
			<div className='flex items-center space-x-2'>
				<div className='bg-white rounded-[8px] px-2 border'>
					<Text className='text-[12px]'>{task.identifier}</Text>
				</div>
				<Text>{task.name}</Text>
			</div>

			<Button className='bg-gray-50/50 hover:bg-gray-100 shadow-none text-slate-800 p-1 h-auto rounded-[6px]'>
				<MoreVerticalIcon />
			</Button>
		</div>
	)
}
