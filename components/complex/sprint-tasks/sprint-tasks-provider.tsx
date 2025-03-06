import { useTasks } from '@/hooks/tasks/use-tasks'
import { Sprint } from '@/types/sprint'
import { Task } from '@/types/task'
import { createContext, ReactNode, useContext } from 'react'

type SprintTasksType = {
	sprint: Sprint
	tasks: Task[]
	isLoadingTasks: boolean
}

const SprintTasksContext = createContext<SprintTasksType | null>(null)

type SprintTasksProviderProps = {
	sprint: Sprint
	children: ReactNode
}

const SprintTasksProvider = ({
	sprint,
	children,
}: SprintTasksProviderProps) => {
	const { isLoading, data: tasks } = useTasks(sprint.id)

	return (
		<SprintTasksContext.Provider
			value={{ sprint, tasks: tasks ?? [], isLoadingTasks: isLoading }}
		>
			{children}
		</SprintTasksContext.Provider>
	)
}

const useSprintTasksContext = () => {
	const context = useContext(SprintTasksContext)

	if (!context) {
		throw new Error(
			'useSprintTasksContext must be used within a SprintTasksProvider'
		)
	}

	return context
}

export { SprintTasksProvider, useSprintTasksContext }
