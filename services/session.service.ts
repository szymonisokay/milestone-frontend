import { User } from '@/types/user'
import { apiRequest } from '@/utils/request'

export const getSession = async () =>
	await apiRequest<User>({ method: 'GET', url: '/session' })
