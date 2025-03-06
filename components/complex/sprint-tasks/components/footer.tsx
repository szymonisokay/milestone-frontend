import { PlusIcon } from 'lucide-react'
import { KeyboardEvent, useState } from 'react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useCloseOnOutsideClick } from '@/hooks/use-close-on-outside-click'

type Props = {
	onAddTask: (name: string) => void
}

export const Footer = ({ onAddTask }: Props) => {
	const [isAddingTask, setIsAddingTask] = useState(false)
	const [inputValue, setInputValue] = useState<string>('')

	const { ref } = useCloseOnOutsideClick<HTMLInputElement>(() => {
		setIsAddingTask(false)
	})

	const onChangeInputVisibility = () => {
		setIsAddingTask(true)
		setTimeout(() => ref.current?.focus(), 0)
	}

	const onInputKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
		if (e.key === 'Escape') {
			setInputValue('')
			setIsAddingTask(false)
		}

		if (e.key === 'Enter') {
			onAddTask(inputValue)
			setInputValue('')
			setIsAddingTask(false)
		}
	}

	return (
		<div className='flex items-center justify-between p-2'>
			{isAddingTask ? (
				<Input
					ref={ref}
					value={inputValue}
					placeholder='What needs to be done?'
					onChange={(e) => setInputValue(e.target.value)}
					onKeyDown={onInputKeyDown}
				/>
			) : (
				<Button
					onClick={onChangeInputVisibility}
					className='bg-gray-50/50 hover:bg-gray-100 shadow-none text-slate-800 py-1 px-4 h-[36px] rounded-[8px]'
				>
					<PlusIcon />
					Add task
				</Button>
			)}
		</div>
	)
}
