import { QUERY_KEYS } from '@/config/query-keys'
import { getTasks } from '@/services/tasks.service'
import { useQuery } from '@tanstack/react-query'

export const useTasks = (sprintId: string) => {
	const { data, isLoading } = useQuery({
		queryKey: [QUERY_KEYS.TASKS, sprintId],
		queryFn: () => getTasks(sprintId),
	})

	return {
		tasks: data ?? [],
		isLoading,
	}
}
