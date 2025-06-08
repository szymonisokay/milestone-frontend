import { BoardTask } from '@/components/complex/project-board/components/board-task'
import { BoardColumn as BoardColumnType } from '@/types/projects'

type Props = {
	column: BoardColumnType
	sprintId: string
}

export const BoardColumn = ({ column, sprintId }: Props) => {
	return (
		<div className='flex flex-col gap-2 w-64 bg-gray-50 p-2 rounded-md'>
			<div className='text-sm font-medium'>{column.status.name}</div>
			<div>
				{column.tasks.map((task) => (
					<BoardTask key={task.id} task={task} sprintId={sprintId} />
				))}
			</div>
		</div>
	)
}
