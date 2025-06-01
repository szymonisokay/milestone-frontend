import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { useDeleteTask } from '@/hooks/tasks/use-delete-task'
import { useModal } from '@/hooks/use-modal'
import { MouseEvent, PropsWithChildren } from 'react'

type Props = {
	taskId: string
	sprintId: string
}

type Action = 'edit' | 'remove'

export const Menu = ({
	children,
	taskId,
	sprintId,
}: PropsWithChildren<Props>) => {
	const { onDeleteTask } = useDeleteTask(sprintId)
	const { onOpen } = useModal()

	const handleAction =
		(action: Action) => async (e: MouseEvent<HTMLDivElement>) => {
			e.stopPropagation()

			switch (action) {
				case 'edit':
					onOpen('manage-task', { taskId, sprintId })
					break
				case 'remove':
					await onDeleteTask(taskId)
					break
			}
		}

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
			<DropdownMenuContent side='right' align='start' className='mt-4'>
				<DropdownMenuItem onClick={handleAction('edit')}>
					Edit
				</DropdownMenuItem>
				<DropdownMenuItem onClick={handleAction('remove')}>
					Remove
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}
