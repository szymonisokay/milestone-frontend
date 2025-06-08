import { API_KEYS } from '@/config/api-keys'
import { Sprint, SprintsResponse, UpdateSprint } from '@/types/sprint'
import { apiRequest } from '@/utils/request'

export const getSprints = async (projectId: string) =>
	await apiRequest<SprintsResponse>({
		url: `${API_KEYS.SPRINTS}/${projectId}`,
	})

export const getActiveSprint = async (projectId: string) =>
	await apiRequest<Sprint>({
		url: `${API_KEYS.SPRINTS}/${projectId}/active`,
	})

export const createSprint = async (projectId: string) =>
	await apiRequest<Sprint>({
		url: `${API_KEYS.SPRINTS}`,
		method: 'POST',
		data: {
			projectId,
		},
	})

export const updateSprint = async (sprintId: string, data: UpdateSprint) =>
	await apiRequest<Sprint>({
		url: `${API_KEYS.SPRINTS}/${sprintId}`,
		method: 'PUT',
		data,
	})
