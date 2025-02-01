export type Task = {
	id: string
	identifier: string
	name?: string
	description?: string
}

export type AddTask = {
	sprintId: string
}

export type UpdateTask = {
	taskId: string
	name?: string
	description?: string
}
