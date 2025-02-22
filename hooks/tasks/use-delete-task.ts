import { QUERY_KEYS } from '@/config/query-keys'
import { deleteTask } from '@/services/tasks.service'
import { useMutation, useQueryClient } from '@tanstack/react-query'

export const useDeleteTask = (sprintId: string) => {
	const queryClient = useQueryClient()

	const { mutateAsync, isPending } = useMutation({
		mutationFn: (taskId: string) => deleteTask(sprintId, taskId),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.SPRINTS] })
		},
	})

	const onDeleteTask = async (taskId: string) => await mutateAsync(taskId)

	return {
		onDeleteTask,
		isPending,
	}
}
