import { getConfiguration } from '@/services/configuration.service'
import { useQuery } from '@tanstack/react-query'

export const useConfiguration = () => {
	const { data, isLoading } = useQuery({
		queryKey: ['configuration'],
		queryFn: () => getConfiguration(),
	})

	return { data, isLoading }
}
