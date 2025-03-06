import { QUERY_KEYS } from '@/config/query-keys'
import { updateTask } from '@/services/tasks.service'
import { UpdateTask } from '@/types/task'
import { useMutation, useQueryClient } from '@tanstack/react-query'

export const useUpdateTask = (sprintId: string, taskId: string) => {
	const queryClient = useQueryClient()

	const { mutateAsync, isPending } = useMutation({
		mutationFn: (data: UpdateTask) => updateTask(sprintId, taskId, data),
		onMutate: async (task) => {
			await queryClient.cancelQueries({
				queryKey: [QUERY_KEYS.TASKS, sprintId, taskId],
			})

			const previousTask = queryClient.getQueryData<UpdateTask[]>([
				QUERY_KEYS.TASKS,
				sprintId,
				taskId,
			]) as unknown as UpdateTask

			const newTask = {
				...previousTask,
				name: task.name ?? previousTask?.name,
				id: taskId,
			}

			queryClient.setQueryData(
				[QUERY_KEYS.TASKS, sprintId, newTask.id],
				newTask
			)

			return { previousTask, newTask }
		},
		onError: (_, __, context) => {
			queryClient.setQueryData(
				[QUERY_KEYS.TASKS, sprintId, context?.newTask.id],
				context?.previousTask
			)
		},
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: [QUERY_KEYS.TASKS, sprintId],
			})
		},
		onSettled: (newTask) => {
			queryClient.invalidateQueries({
				queryKey: [QUERY_KEYS.TASKS, sprintId, newTask?.id],
			})
		},
	})

	const onUpdateTask = async (data: UpdateTask) => await mutateAsync(data)

	return {
		onUpdateTask,
		isPending,
	}
}
