import { OnboardingWrapper } from '@/components/complex/onboarding/wrapper'
import { OnboardingDetailsForm } from '@/components/forms/onboarding-details/form'

const OnboardingDetailsPage = () => (
	<OnboardingWrapper
		title='Tell us about yourself'
		description='This will help us personalize your experience'
	>
		<OnboardingDetailsForm />
	</OnboardingWrapper>
)

export default OnboardingDetailsPage
