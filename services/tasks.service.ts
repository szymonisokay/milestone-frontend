import { API_KEYS } from '@/config/api-keys'
import { AddTask, Task, TaskStatus, UpdateTask } from '@/types/task'
import { apiRequest } from '@/utils/request'

export const getTasks = async (sprintId: string) =>
	await apiRequest<Task[]>({
		method: 'GET',
		url: `${API_KEYS.SPRINTS}/${sprintId}/tasks`,
	})

export const getTask = async (sprintId: string, taskId: string) =>
	await apiRequest<Task>({
		method: 'GET',
		url: `${API_KEYS.SPRINTS}/${sprintId}/tasks/${taskId}`,
	})

export const addTask = async (sprintId: string, data: AddTask) =>
	await apiRequest<Task>({
		method: 'POST',
		url: `${API_KEYS.SPRINTS}/${sprintId}/tasks`,
		data,
	})

export const updateTask = async (
	sprintId: string,
	taskId: string,
	data: UpdateTask
) =>
	await apiRequest<Task>({
		method: 'PUT',
		url: `${API_KEYS.SPRINTS}/${sprintId}/tasks/${taskId}`,
		data,
	})

export const deleteTask = async (sprintId: string, taskId: string) =>
	await apiRequest<{ name: string }>({
		method: 'DELETE',
		url: `${API_KEYS.SPRINTS}/${sprintId}/tasks/${taskId}`,
	})

export const getTaskStatus = async (workspaceId?: string) =>
	await apiRequest<TaskStatus[]>({
		method: 'GET',
		url: `${API_KEYS.SPRINTS}/tasks/status${
			workspaceId ? `?workspaceId=${workspaceId}` : ''
		}`,
	})
