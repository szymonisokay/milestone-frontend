export type Sprint = {
	id: string
	name: string
	goal?: string
	startDate: string | null
	endDate: string | null
	isActive: boolean
	isCompleted: boolean
}

export type SprintsResponse = Sprint[]

export type UpdateSprint = Partial<Omit<Sprint, 'id'>>
