import { CheckIcon, XIcon } from 'lucide-react'
import { KeyboardEvent, useEffect, useState } from 'react'

import { useManageTaskContext } from '@/components/complex/manage-task/manage-task-provider'
import { Text } from '@/components/primitives/text'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useUpdateTask } from '@/hooks/tasks/use-update-task'
import { useCloseOnOutsideClick } from '@/hooks/use-close-on-outside-click'

export const TaskName = () => {
	const { task, sprintId } = useManageTaskContext()
	const { onUpdateTask } = useUpdateTask(sprintId)

	const [isEditing, setIsEditing] = useState(false)
	const [inputValue, setInputValue] = useState<string>(task?.name ?? '')

	const onSaveEditMode = () => {
		if (!inputValue) return

		onUpdateTask({ name: inputValue, id: task?.id as string })
		setIsEditing(false)
	}

	const { ref } = useCloseOnOutsideClick<HTMLInputElement>(() => {
		onSaveEditMode()
	}, ['.action'])

	const onChangeEditMode = () => {
		setIsEditing(true)
		setTimeout(() => ref.current?.focus(), 0)
	}

	const onCloseEditMode = () => {
		setIsEditing(false)
		setInputValue(task?.name ?? '')
	}

	const onInputKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
		if (e.key === 'Escape') {
			onCloseEditMode()
		}

		if (e.key === 'Enter') {
			onSaveEditMode()
		}
	}

	const onTextKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
		if (e.key === 'Enter' || e.key === ' ') {
			onChangeEditMode()
		}
	}

	useEffect(() => {
		setInputValue(task?.name ?? '')
	}, [task?.name])

	return (
		<div className='relative mt-4 mx-[-12px] lg:mr-0 h-[36px] hover:bg-gray-100 transition-all duration-300 rounded-[10px]'>
			{isEditing ? (
				<>
					<Input
						ref={ref}
						value={inputValue}
						onChange={(e) => setInputValue(e.target.value)}
						onKeyDown={onInputKeyDown}
						aria-invalid={!inputValue}
						className='text-[22px] font-semibold'
					/>
					<div className='absolute right-0 flex items-center justify-end gap-2 top-11 z-10'>
						<Button
							onClick={onSaveEditMode}
							className='w-8 h-8 p-0 bg-white action hover:bg-slate-50/70 text-primary shadow-simple'
						>
							<CheckIcon />
						</Button>
						<Button
							onClick={onCloseEditMode}
							className='w-8 h-8 p-0 bg-white action hover:bg-slate-50/70 text-primary shadow-simple'
						>
							<XIcon />
						</Button>
					</div>
				</>
			) : (
				<Text
					tabIndex={0}
					className='flex items-center w-full h-full pl-3 text-primary text-[22px] font-semibold'
					onClick={onChangeEditMode}
					onKeyDown={onTextKeyDown}
				>
					{task?.name}
				</Text>
			)}
		</div>
	)
}
