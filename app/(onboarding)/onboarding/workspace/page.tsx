import { OnboardingWrapper } from '@/components/complex/onboarding/wrapper'
import { OnboardingWorkspaceForm } from '@/components/forms/onboarding-workspace/form'

const OnboardingWorkspacePage = () => (
	<OnboardingWrapper
		title='Create your workspace'
		description='This will be your main gathering place'
	>
		<OnboardingWorkspaceForm />
	</OnboardingWrapper>
)

export default OnboardingWorkspacePage
