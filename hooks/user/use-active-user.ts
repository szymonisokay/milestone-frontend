import { useQuery } from '@tanstack/react-query'

import { QUERY_KEYS } from '@/config/query-keys'
import { getActiveUser } from '@/services/user.service'

export const useActiveUser = () => {
	const { data, isLoading } = useQuery({
		queryKey: [QUERY_KEYS.USER],
		queryFn: () => getActiveUser(),
		retry: false,
	})

	return {
		user: data,
		isLoading,
	}
}
