import { API_KEYS } from '@/config/api-keys'
import { SprintsResponse } from '@/types/sprint'
import { apiRequest } from '@/utils/request'

export const getSprints = async (projectId: string) =>
	await apiRequest<SprintsResponse>({
		url: `${API_KEYS.SPRINTS}/${projectId}`,
	})
