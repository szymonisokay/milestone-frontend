import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { useDeleteTask } from '@/hooks/tasks/use-delete-task'
import { PropsWithChildren } from 'react'

type Props = {
	taskId: string
	sprintId: string
}

export const Menu = ({
	children,
	taskId,
	sprintId,
}: PropsWithChildren<Props>) => {
	const { onDeleteTask } = useDeleteTask(sprintId)

	const handleDeleteTask = async () => {
		await onDeleteTask(taskId)
	}

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
			<DropdownMenuContent side='right' className='mt-4'>
				<DropdownMenuItem disabled>Edit</DropdownMenuItem>
				<DropdownMenuItem onClick={handleDeleteTask}>
					Remove
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}
