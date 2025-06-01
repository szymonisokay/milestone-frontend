import { DropdownMenuItemProps } from '@radix-ui/react-dropdown-menu'

import { Button, ButtonProps } from '@/components/ui/button'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { useTaskStatus } from '@/hooks/tasks/use-task-status'
import { cn } from '@/lib/utils'
import { TaskStatus } from '@/types/task'

type Components = {
	button?: ButtonProps
	menuItem?: DropdownMenuItemProps
}

type Props = {
	value: TaskStatus
	components?: Components
	onChange: (status: TaskStatus) => void
}

export const TaskStatusSelect = ({ value, components, onChange }: Props) => {
	const { statuses } = useTaskStatus()

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button
					{...components?.button}
					variant='outline'
					className={cn(
						'rounded-md shadow-none',
						components?.button?.className
					)}
				>
					{value.name}
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align='start'>
				{statuses.map((status) => (
					<DropdownMenuItem
						key={status.id}
						{...components?.menuItem}
						onClick={(event) => {
							event.stopPropagation()

							onChange(status)
						}}
					>
						{status.name}
					</DropdownMenuItem>
				))}
			</DropdownMenuContent>
		</DropdownMenu>
	)
}
