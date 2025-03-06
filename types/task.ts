export type Task = {
	id: string
	identifier: string
	name: string
	description?: string
}

export type AddTask = {
	name: string
}

export type UpdateTask = Omit<Partial<Task>, 'id' | 'identifier'>
