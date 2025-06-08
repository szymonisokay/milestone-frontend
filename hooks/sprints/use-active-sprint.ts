import { useQuery } from '@tanstack/react-query'

import { QUERY_KEYS } from '@/config/query-keys'
import { getActiveSprint } from '@/services/sprints.service'

export const useActiveSprint = (projectId: string) => {
	const { data, isLoading, isError } = useQuery({
		queryKey: [QUERY_KEYS.ACTIVE_SPRINT],
		queryFn: () => getActiveSprint(projectId),
		enabled: !!projectId,
		staleTime: 60 * 1000,
	})

	return {
		sprint: data,
		isLoading,
		isError,
	}
}
