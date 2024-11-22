import { useQuery } from '@tanstack/react-query'

import { QUERY_KEYS } from '@/config/query-keys'
import { getSession } from '@/services/session.service'

export const useSession = () => {
	const { data, isLoading, isError } = useQuery({
		queryKey: [QUERY_KEYS.SESSION],
		queryFn: () => getSession(),
		retry: false,
	})

	return { data, isLoading, isError }
}
