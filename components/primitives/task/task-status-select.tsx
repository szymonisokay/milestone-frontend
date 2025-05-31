import { Button } from '@/components/ui/button'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { useTaskStatus } from '@/hooks/tasks/use-task-status'
import { TaskStatus } from '@/types/task'

type Props = {
	value: TaskStatus
	onChange: (status: TaskStatus) => void
}

export const TaskStatusSelect = ({ value, onChange }: Props) => {
	const { statuses } = useTaskStatus()

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant='outline' className='rounded-md shadow-none'>
					{value.name}
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align='start'>
				{statuses.map((status) => (
					<DropdownMenuItem
						key={status.id}
						onClick={() => onChange(status)}
					>
						{status.name}
					</DropdownMenuItem>
				))}
			</DropdownMenuContent>
		</DropdownMenu>
	)
}
