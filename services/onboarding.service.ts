import { API_KEYS } from '@/config/api-keys'
import {
	OnboardingDetailsData,
	OnboardingWorkspaceData,
} from '@/types/onboarding'
import { apiRequest } from '@/utils/request'

export const updateDetails = async (data: OnboardingDetailsData) =>
	await apiRequest<void>({
		method: 'POST',
		url: API_KEYS.ONBOARDING_DETAILS,
		data,
	})

export const createWorkspace = async (data: OnboardingWorkspaceData) =>
	await apiRequest<void>({
		method: 'POST',
		url: API_KEYS.ONBOARDING_WORKSPACE,
		data,
	})
