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
}

export const TaskStatusSelect = ({ value }: Props) => {
	const { statuses } = useTaskStatus()

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant='outline'>{value.name}</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align='start'>
				{statuses.map((status) => (
					<DropdownMenuItem key={status.id}>
						{status.name}
					</DropdownMenuItem>
				))}
			</DropdownMenuContent>
		</DropdownMenu>
	)
}
