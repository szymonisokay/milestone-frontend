import { SignUpForm } from '@/components/forms/sign-up/form'
import { Card } from '@/components/primitives/card'
import { GridBackground } from '@/components/primitives/grid-background'
import { Heading } from '@/components/primitives/heading'
import { TextWithLink } from '@/components/primitives/text-with-link'

const SignUpPage = () => (
	<GridBackground>
		<Card>
			<Heading
				title='Welcome to milestone.'
				description='Create your account here'
				components={{
					divider: {
						show: 'true',
					},
				}}
			/>
			<SignUpForm />
			<TextWithLink
				text='Already have an account?'
				linkText='Sign In'
				href='/sign-in'
			/>
		</Card>
	</GridBackground>
)

export default SignUpPage
