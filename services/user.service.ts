import { API_KEYS } from '@/config/api-keys'
import { User } from '@/types/user'
import { apiRequest } from '@/utils/request'

export const getActiveUser = async () =>
	await apiRequest<User>({ method: 'GET', url: API_KEYS.USER })
