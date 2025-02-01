import { API_KEYS } from '@/config/api-keys'
import { AddTask, UpdateTask } from '@/types/task'
import { apiRequest } from '@/utils/request'

export const addTask = async (sprintId: string, data?: AddTask) =>
	await apiRequest<{ name: string }>({
		method: 'POST',
		url: `${API_KEYS.TASKS}/${sprintId}`,
		data,
	})

export const updateTask = async (sprintId: string, data?: UpdateTask) =>
	await apiRequest<{ name: string }>({
		method: 'PATCH',
		url: `${API_KEYS.TASKS}/${sprintId}`,
		data,
	})
