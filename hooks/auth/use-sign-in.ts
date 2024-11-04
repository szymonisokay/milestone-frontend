import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'

import { signIn } from '@/services/auth.service'
import { SignInData } from '@/types/auth'
import { setAuthCookie } from '@/utils/jwt'

export const useSignIn = () => {
	const router = useRouter()
	const { mutateAsync, isPending, isSuccess } = useMutation({
		mutationFn: (data: SignInData) => signIn(data),
		onSuccess: (token) => {
			setAuthCookie(token)

			router.replace('/dashboard')
		},
	})

	const onSignIn = async (data: SignInData) => await mutateAsync(data)

	return {
		onSignIn,
		isPending,
		isSuccess,
	}
}
