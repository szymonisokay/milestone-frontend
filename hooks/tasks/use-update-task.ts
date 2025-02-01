import { QUERY_KEYS } from '@/config/query-keys'
import { updateTask } from '@/services/tasks.service'
import { UpdateTask } from '@/types/task'
import { useMutation, useQueryClient } from '@tanstack/react-query'

export const useUpdateTask = (sprintId: string) => {
	const queryClient = useQueryClient()

	const { mutateAsync, isPending } = useMutation({
		mutationFn: (data?: UpdateTask) => updateTask(sprintId, data),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.SPRINTS] })
		},
	})

	const onUpdateTask = async (data?: UpdateTask) => await mutateAsync(data)

	return {
		onUpdateTask,
		isPending,
	}
}
