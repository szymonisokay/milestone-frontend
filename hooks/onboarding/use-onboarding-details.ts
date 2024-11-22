import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'

import { updateDetails } from '@/services/onboarding.service'
import { OnboardingDetailsData } from '@/types/onboarding'

export const useOnboardingDetails = () => {
	const router = useRouter()
	const { mutateAsync, isPending } = useMutation({
		mutationFn: (data: OnboardingDetailsData) => updateDetails(data),
		onSuccess: () => router.replace('/onboarding/workspace'),
	})

	const onUpdateDetails = async (data: OnboardingDetailsData) =>
		await mutateAsync(data)

	return {
		onUpdateDetails,
		isPending,
	}
}
