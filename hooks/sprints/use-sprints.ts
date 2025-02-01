import { useQuery } from '@tanstack/react-query'

import { QUERY_KEYS } from '@/config/query-keys'
import { getSprints } from '@/services/sprints.service'

export const useSprints = (projectId: string) => {
	const { data, isLoading } = useQuery({
		queryKey: [QUERY_KEYS.SPRINTS, projectId],
		queryFn: () => getSprints(projectId),
	})

	return {
		sprints: data,
		isLoading,
	}
}
