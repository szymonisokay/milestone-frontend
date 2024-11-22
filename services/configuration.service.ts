import { API_KEYS } from '@/config/api-keys'
import { Configuration } from '@/types/configuration'
import { apiRequest } from '@/utils/request'

export const getConfiguration = async () =>
	await apiRequest<Configuration>({
		method: 'GET',
		url: API_KEYS.CONFIGURATION,
	})
