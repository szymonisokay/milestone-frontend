import { useProjectBoardColumns } from '@/hooks/projects/use-project-board-columns'
import { useTasks } from '@/hooks/tasks/use-tasks'
import { Project } from '@/types/projects'
import { Sprint } from '@/types/sprint'
import { mapTasksToBoardColumns } from '@/utils/project-board'

import { BoardColumn } from './components/board-column'

type Props = {
	project: Project
	sprint: Sprint
}

export const ProjectBoard = ({ project, sprint }: Props) => {
	const { columns } = useProjectBoardColumns(project.id)
	const { tasks } = useTasks(sprint.id)

	const boardColumns = mapTasksToBoardColumns(columns, tasks)

	return (
		<div className='flex gap-4 p-4'>
			{boardColumns.map((column) => (
				<BoardColumn
					key={column.id}
					column={column}
					sprintId={sprint.id}
				/>
			))}
		</div>
	)
}
