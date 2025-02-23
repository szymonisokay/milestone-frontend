import { QUERY_KEYS } from '@/config/query-keys'
import { getTask } from '@/services/tasks.service'
import { useQuery } from '@tanstack/react-query'

type Props = {
	taskId?: string
	sprintId?: string
}

export const useTask = ({ taskId, sprintId }: Props) => {
	const { data, isLoading } = useQuery({
		queryKey: [QUERY_KEYS.TASKS, taskId],
		queryFn: () => getTask(sprintId as string, taskId as string),
		enabled: !!taskId && !!sprintId,
	})

	return {
		data,
		isLoading,
	}
}
