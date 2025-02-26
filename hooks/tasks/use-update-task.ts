import { QUERY_KEYS } from '@/config/query-keys'
import { updateTask } from '@/services/tasks.service'
import { UpdateTask } from '@/types/task'
import { useMutation, useQueryClient } from '@tanstack/react-query'

export const useUpdateTask = (sprintId: string) => {
	const queryClient = useQueryClient()

	const { mutateAsync, isPending } = useMutation({
		mutationFn: (data: UpdateTask) => updateTask(sprintId, data),
		onMutate: async (task) => {
			await queryClient.cancelQueries({
				queryKey: [QUERY_KEYS.TASKS, task.id],
			})

			const previousTask = queryClient.getQueryData<UpdateTask[]>([
				QUERY_KEYS.TASKS,
				task.id,
			]) as unknown as UpdateTask

			const newTask = {
				...previousTask,
				name: task.name ?? previousTask?.name,
				id: task.id,
			}

			queryClient.setQueryData([QUERY_KEYS.TASKS, newTask.id], newTask)

			return { previousTask, newTask }
		},
		onError: (_, __, context) => {
			queryClient.setQueryData(
				['todos', context?.newTask.id],
				context?.previousTask
			)
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.TASKS] })
		},
		onSettled: (newTask) => {
			queryClient.invalidateQueries({ queryKey: ['todos', newTask?.id] })
		},
	})

	const onUpdateTask = async (data: UpdateTask) => await mutateAsync(data)

	return {
		onUpdateTask,
		isPending,
	}
}
