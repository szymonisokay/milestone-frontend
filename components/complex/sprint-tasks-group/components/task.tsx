import { Text } from '@/components/primitives/text'
import { Button } from '@/components/ui/button'
import { useUpdateTask } from '@/hooks/tasks/use-update-task'
import { Task as TaskType } from '@/types/task'
import { MoreVerticalIcon } from 'lucide-react'
import { useEffect, useRef } from 'react'

type Props = {
	sprintId: string
	task: TaskType
}

export const Task = ({ sprintId, task }: Props) => {
	const inputRef = useRef<HTMLInputElement | null>(null)

	const { onUpdateTask } = useUpdateTask(sprintId)

	const onInputBlur = async () => {
		await onUpdateTask({ name: inputRef.current?.value, taskId: task.id })
	}

	const onKeyDown = async (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === 'Enter') {
			await onUpdateTask({
				name: inputRef.current?.value,
				taskId: task.id,
			})
		}
	}

	useEffect(() => {
		if (!inputRef.current) return

		setTimeout(() => inputRef.current?.focus(), 0)
	}, [])

	return (
		<div className='flex items-center justify-between hover:bg-gray-100 p-2 border-b last-of-type:border-b-0'>
			<div className='flex items-center space-x-2'>
				<div className='bg-white rounded-[8px] px-2 border'>
					<Text className='text-[12px]'>{task.identifier}</Text>
				</div>
				{task.name ? (
					<Text>{task.name}</Text>
				) : (
					<input
						ref={inputRef}
						onBlur={onInputBlur}
						onKeyDown={onKeyDown}
					/>
				)}
			</div>

			<Button className='bg-gray-50/50 hover:bg-gray-100 shadow-none text-slate-800 p-1 h-auto rounded-[6px]'>
				<MoreVerticalIcon />
			</Button>
		</div>
	)
}
