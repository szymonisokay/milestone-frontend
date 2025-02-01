import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'

import { QUERY_KEYS } from '@/config/query-keys'
import { createWorkspace } from '@/services/onboarding.service'
import { OnboardingWorkspaceData } from '@/types/onboarding'

export const useOnboardingWorkspace = () => {
	const router = useRouter()
	const queryClient = useQueryClient()
	const { mutateAsync, isPending } = useMutation({
		mutationFn: (data: OnboardingWorkspaceData) => createWorkspace(data),
		onSuccess: async () => {
			await queryClient.invalidateQueries({
				queryKey: [QUERY_KEYS.CONFIGURATION],
			})
			router.replace('/dashboard')
		},
	})

	const onCreateWorkspace = async (data: OnboardingWorkspaceData) =>
		await mutateAsync(data)

	return {
		onCreateWorkspace,
		isPending,
	}
}
