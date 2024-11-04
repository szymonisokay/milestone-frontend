import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'

import { signUp } from '@/services/auth.service'
import { SignUpData } from '@/types/auth'

export const useSignUp = () => {
	const router = useRouter()
	const { mutateAsync, isPending, isSuccess } = useMutation({
		mutationFn: (data: SignUpData) => signUp(data),
		onSuccess: () => {
			router.replace('/sign-in')
		},
	})

	const onSignUp = async (data: SignUpData) => await mutateAsync(data)

	return {
		onSignUp,
		isPending,
		isSuccess,
	}
}
