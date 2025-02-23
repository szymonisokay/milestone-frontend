import { createContext, ReactNode, useContext } from 'react'

import { useTask } from '@/hooks/tasks/use-task'
import { Task } from '@/types/task'

type ManageTaskType = {
	task?: Task
	sprintId: string
	isLoading: boolean
}

const ManageTaskContext = createContext<ManageTaskType | null>(null)

type ManageTaskProviderProps = {
	children: ReactNode
	taskId?: string
	sprintId?: string
}

const ManageTaskProvider = ({
	taskId,
	sprintId,
	children,
}: ManageTaskProviderProps) => {
	const { data, isLoading } = useTask({ taskId, sprintId })

	return (
		<ManageTaskContext.Provider
			value={{
				task: data,
				sprintId: sprintId as string,
				isLoading,
			}}
		>
			{children}
		</ManageTaskContext.Provider>
	)
}

const useManageTaskContext = () => {
	const context = useContext(ManageTaskContext)

	if (!context) {
		throw new Error(
			'useManageTaskContext must be used within a ManageTaskProvider'
		)
	}

	return context
}

export { ManageTaskProvider, useManageTaskContext }
