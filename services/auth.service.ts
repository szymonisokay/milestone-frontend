import { SignInData, SignInDataResponse, SignUpData } from '@/types/auth'
import { apiRequest } from '@/utils/request'

export const signIn = async (data: SignInData) =>
	await apiRequest<SignInDataResponse>({
		method: 'POST',
		url: '/auth/sign-in',
		data,
	})

export const signUp = async (data: SignUpData) =>
	await apiRequest<void>({ method: 'POST', url: '/auth/sign-up', data })
