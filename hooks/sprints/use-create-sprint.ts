import { useMutation, useQueryClient } from '@tanstack/react-query'

import { QUERY_KEYS } from '@/config/query-keys'
import { createSprint } from '@/services/sprints.service'

export const useCreateSprint = () => {
	const queryClient = useQueryClient()
	const { mutate, isPending } = useMutation({
		mutationFn: createSprint,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.SPRINTS] })
		},
	})

	const onCreateSprint = (projectId: string) => {
		mutate(projectId)
	}

	return {
		onCreateSprint,
		isPending,
	}
}
