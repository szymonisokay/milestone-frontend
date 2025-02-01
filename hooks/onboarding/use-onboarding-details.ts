import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'

import { QUERY_KEYS } from '@/config/query-keys'
import { updateDetails } from '@/services/onboarding.service'
import { OnboardingDetailsData } from '@/types/onboarding'

export const useOnboardingDetails = () => {
	const router = useRouter()
	const queryClient = useQueryClient()
	const { mutateAsync, isPending } = useMutation({
		mutationFn: (data: OnboardingDetailsData) => updateDetails(data),
		onSuccess: async () => {
			await queryClient.invalidateQueries({
				queryKey: [QUERY_KEYS.USER],
			})
			router.replace('/onboarding/workspace')
		},
	})

	const onUpdateDetails = async (data: OnboardingDetailsData) =>
		await mutateAsync(data)

	return {
		onUpdateDetails,
		isPending,
	}
}
