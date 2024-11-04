import { Configuration } from '@/types/configuration'
import { apiRequest } from '@/utils/request'

export const getConfiguration = async () =>
	await apiRequest<Configuration>({
		method: 'GET',
		url: '/configuration',
	})
