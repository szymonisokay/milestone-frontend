import { API_KEYS } from '@/config/api-keys'
import { AddProjectData, GetProjectsResponse, Project } from '@/types/projects'
import { apiRequest } from '@/utils/request'

export const addProject = async (data: AddProjectData) =>
	await apiRequest<{ name: string }>({
		method: 'POST',
		url: API_KEYS.PROJECTS,
		data,
	})

export const getProjects = async () =>
	await apiRequest<GetProjectsResponse>({
		method: 'GET',
		url: API_KEYS.PROJECTS,
	})

export const getProject = async (symbol: string) =>
	await apiRequest<Project>({
		method: 'GET',
		url: `${API_KEYS.PROJECTS}/${symbol}`,
	})
