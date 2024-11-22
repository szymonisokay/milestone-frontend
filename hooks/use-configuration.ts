import { useQuery } from '@tanstack/react-query'

import { QUERY_KEYS } from '@/config/query-keys'
import { getConfiguration } from '@/services/configuration.service'

export const useConfiguration = () => {
	const { data, isLoading } = useQuery({
		queryKey: [QUERY_KEYS.CONFIGURATION],
		queryFn: () => getConfiguration(),
	})

	return { data, isLoading }
}
