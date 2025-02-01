import { Task } from '@/types/task'

export type Sprint = {
	id: string
	name: string
	goal?: string
	startDate: string | null
	endDate: string | null
	isActive: boolean
	isCompleted: boolean
	tasks: Task[]
}

export type SprintsResponse = Sprint[]
