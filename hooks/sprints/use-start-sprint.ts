import { useMutation, useQueryClient } from '@tanstack/react-query'

import { QUERY_KEYS } from '@/config/query-keys'
import { updateSprint } from '@/services/sprints.service'
import { UpdateSprint } from '@/types/sprint'

export const useStartSprint = (sprintId: string) => {
	const queryClient = useQueryClient()
	const { mutate, isPending } = useMutation({
		mutationFn: (data: UpdateSprint) => updateSprint(sprintId, data),
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: [QUERY_KEYS.SPRINTS],
			})
			queryClient.invalidateQueries({
				queryKey: [QUERY_KEYS.ACTIVE_SPRINT],
			})
		},
	})

	const onStartSprint = () => {
		mutate({ isActive: true } as UpdateSprint)
	}

	return {
		onStartSprint,
		isPending,
	}
}
