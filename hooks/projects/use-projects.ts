import { useQuery } from '@tanstack/react-query'

import { QUERY_KEYS } from '@/config/query-keys'
import { getProjects } from '@/services/projects.service'

export const useProjects = () => {
	const { data, isLoading } = useQuery({
		queryKey: [QUERY_KEYS.PROJECTS],
		queryFn: () => getProjects(),
	})

	return {
		projects: data,
		isLoading,
	}
}
