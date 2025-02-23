import { API_KEYS } from '@/config/api-keys'
import { AddTask, Task, UpdateTask } from '@/types/task'
import { apiRequest } from '@/utils/request'

export const getTask = async (sprintId: string, taskId: string) =>
	await apiRequest<Task>({
		method: 'GET',
		url: `${API_KEYS.TASKS}/${sprintId}/${taskId}`,
	})

export const addTask = async (sprintId: string, data?: AddTask) =>
	await apiRequest<{ name: string }>({
		method: 'POST',
		url: `${API_KEYS.TASKS}/${sprintId}`,
		data,
	})

export const updateTask = async (sprintId: string, data?: UpdateTask) =>
	await apiRequest<Task>({
		method: 'PATCH',
		url: `${API_KEYS.TASKS}/${sprintId}`,
		data,
	})

export const deleteTask = async (sprintId: string, taskId: string) =>
	await apiRequest<{ name: string }>({
		method: 'DELETE',
		url: `${API_KEYS.TASKS}/${sprintId}/${taskId}`,
	})
