import { getSession } from '@/services/session.service'
import { useQuery } from '@tanstack/react-query'

export const useSession = () => {
	const { data, isLoading, isError } = useQuery({
		queryKey: ['session'],
		queryFn: () => getSession(),
		retry: false,
	})

	return { data, isLoading, isError }
}
