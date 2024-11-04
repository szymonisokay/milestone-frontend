import { OnboardingDetailsForm } from '@/components/forms/onboarding-details/form'
import { Heading } from '@/components/heading'

export const UserDetails = () => (
	<div className='flex h-full w-full justify-center items-center bg-grid-small-black/[0.1]'>
		<div className='bg-white p-4 shadow-simple rounded-[10px] space-y-4'>
			<Heading
				title='Give us some info'
				description='About you'
				components={{ divider: { show: 'true' } }}
			/>
			<OnboardingDetailsForm />
		</div>
	</div>
)
