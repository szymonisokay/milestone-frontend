import { useMutation, useQueryClient } from '@tanstack/react-query'

import { QUERY_KEYS } from '@/config/query-keys'
import { updateSprint } from '@/services/sprints.service'
import { UpdateSprint } from '@/types/sprint'

export const useUpdateSprint = (sprintId: string) => {
	const queryClient = useQueryClient()
	const { mutate, isPending } = useMutation({
		mutationFn: (data: UpdateSprint) => updateSprint(sprintId, data),
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: [QUERY_KEYS.SPRINTS],
			})
		},
	})

	const onUpdateSprint = (data: UpdateSprint) => {
		mutate(data)
	}

	return {
		onUpdateSprint,
		isPending,
	}
}
