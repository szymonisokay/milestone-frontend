import { BoardColumn } from '@/types/projects'
import { Task, TaskColumn } from '@/types/task'

export const mapTasksToBoardColumns = (
	columns: TaskColumn[],
	tasks: Task[]
): BoardColumn[] =>
	columns.map((column) => {
		return {
			...column,
			tasks: tasks.filter((task) => task.status.id === column.id),
		}
	})
