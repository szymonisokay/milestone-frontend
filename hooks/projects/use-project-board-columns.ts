import { useQuery } from '@tanstack/react-query'

import { QUERY_KEYS } from '@/config/query-keys'
import { getProjectBoardColumns } from '@/services/projects.service'

export const useProjectBoardColumns = (projectId: string) => {
	const { data, isLoading, isError } = useQuery({
		queryKey: [QUERY_KEYS.PROJECT_BOARD_COLUMNS, projectId],
		queryFn: () => getProjectBoardColumns(projectId),
		enabled: !!projectId,
		staleTime: 60 * 1000,
	})

	return {
		columns: data ?? [],
		isLoading,
		isError,
	}
}
