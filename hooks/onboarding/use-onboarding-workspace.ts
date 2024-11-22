import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'

import { createWorkspace } from '@/services/onboarding.service'
import { OnboardingWorkspaceData } from '@/types/onboarding'

export const useOnboardingWorkspace = () => {
	const router = useRouter()
	const { mutateAsync, isPending } = useMutation({
		mutationFn: (data: OnboardingWorkspaceData) => createWorkspace(data),
		onSuccess: () => router.replace('/dashboard'),
	})

	const onCreateWorkspace = async (data: OnboardingWorkspaceData) =>
		await mutateAsync(data)

	return {
		onCreateWorkspace,
		isPending,
	}
}
