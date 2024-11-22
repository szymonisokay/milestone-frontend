import { useQuery } from '@tanstack/react-query'

import { QUERY_KEYS } from '@/config/query-keys'
import { getProject } from '@/services/projects.service'

export const useProject = (symbol: string) => {
	const { data, isLoading, isError } = useQuery({
		queryKey: [QUERY_KEYS.PROJECTS, symbol],
		queryFn: () => getProject(symbol),
		retry: false,
	})

	return {
		project: data,
		isLoading,
		isError,
	}
}
