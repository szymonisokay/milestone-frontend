import { QUERY_KEYS } from '@/config/query-keys'
import { addTask } from '@/services/tasks.service'
import { AddTask } from '@/types/task'
import { useMutation, useQueryClient } from '@tanstack/react-query'

export const useAddTask = (sprintId: string) => {
	const queryClient = useQueryClient()

	const { mutateAsync, isPending } = useMutation({
		mutationFn: (data?: AddTask) => addTask(sprintId, data),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.SPRINTS] })
		},
	})

	const onAddTask = async (data?: AddTask) => await mutateAsync(data)

	return {
		onAddTask,
		isPending,
	}
}
