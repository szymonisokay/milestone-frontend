import { HttpError } from '@/utils/error'
import axios, { AxiosRequestConfig } from 'axios'

type AxiosConfig = Omit<AxiosRequestConfig, 'baseURL'>

export const apiRequest = async <T>(axiosConfig: AxiosConfig) => {
	try {
		const response = await axios.request<T>({
			...axiosConfig,
			baseURL: process.env.NEXT_PUBLIC_BASE_BACKEND_URL,
			withCredentials: true,
		})

		return response.data
	} catch (error: unknown) {
		throw new HttpError(error)
	}
}
