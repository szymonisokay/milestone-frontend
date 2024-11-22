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
