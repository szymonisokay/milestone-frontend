import { Task, TaskColumn } from '@/types/task'

export type AddProjectData = {
	name: string
	symbol: string
	description?: string
}

export type Project = {
	id: string
	name: string
	symbol: string
	description?: string
}

export type GetProjectsResponse = Project[]

export type BoardColumn = TaskColumn & {
	tasks: Task[]
}
export type BoardColumns = BoardColumn[]
