import { useQuery } from '@tanstack/react-query'

import { QUERY_KEYS } from '@/config/query-keys'
import { getTaskStatus } from '@/services/tasks.service'

import { useConfiguration } from '../use-configuration'

export const useTaskStatus = () => {
	const { data: configuration } = useConfiguration()

	const workspaceId = configuration?.workspaceId ?? ''

	const { data, isLoading } = useQuery({
		queryKey: [QUERY_KEYS.TASK_STATUS, workspaceId],
		queryFn: () => getTaskStatus(workspaceId),
		retry: false,
		staleTime: 60 * 60 * 1000,
	})

	return { statuses: data ?? [], isLoading }
}
