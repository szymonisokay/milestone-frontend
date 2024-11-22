import { API_KEYS } from '@/config/api-keys'
import { SignInData, SignInDataResponse, SignUpData } from '@/types/auth'
import { apiRequest } from '@/utils/request'

export const signIn = async (data: SignInData) =>
	await apiRequest<SignInDataResponse>({
		method: 'POST',
		url: API_KEYS.SIGN_IN,
		data,
	})

export const signUp = async (data: SignUpData) =>
	await apiRequest<void>({ method: 'POST', url: API_KEYS.SIGN_UP, data })
