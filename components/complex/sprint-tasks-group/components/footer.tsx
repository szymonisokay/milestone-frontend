import { Button } from '@/components/ui/button'
import { PlusIcon } from 'lucide-react'

type Props = {
	onAddTask: () => void
}

export const Footer = ({ onAddTask }: Props) => {
	return (
		<div className='flex items-center justify-between p-2'>
			<Button
				onClick={onAddTask}
				className='bg-gray-50/50 hover:bg-gray-100 shadow-none text-slate-800 py-1 px-2 h-auto rounded-[8px]'
			>
				<PlusIcon />
				Add task
			</Button>
		</div>
	)
}
