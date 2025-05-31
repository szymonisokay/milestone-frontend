import { useQuery } from '@tanstack/react-query'

import { QUERY_KEYS } from '@/config/query-keys'
import { getWorkspaceMembers } from '@/services/workspace.service'
import { useConfiguration } from '../use-configuration'

export const useWorkspaceMembers = () => {
	const { data: configuration } = useConfiguration()

	const workspaceId = configuration?.workspaceId ?? ''

	const { data, isLoading } = useQuery({
		queryKey: [QUERY_KEYS.WORKSPACE_MEMBERS, workspaceId],
		queryFn: () => getWorkspaceMembers(workspaceId),
		enabled: !!workspaceId,
	})

	return { members: data ?? [], isLoading }
}
