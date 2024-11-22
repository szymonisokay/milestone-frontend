import { SignInForm } from '@/components/forms/sign-in/form'
import { Card } from '@/components/primitives/card'
import { GridBackground } from '@/components/primitives/grid-background'
import { Heading } from '@/components/primitives/heading'
import { TextWithLink } from '@/components/primitives/text-with-link'

const SignInPage = () => (
	<GridBackground>
		<Card>
			<Heading
				title='Welcome back!'
				description='Sign in to your milestone. account'
				components={{
					divider: {
						show: 'true',
					},
				}}
			/>
			<SignInForm />
			<TextWithLink
				text='Don’t have an account?'
				linkText='Sign up'
				href='/sign-up'
			/>
		</Card>
	</GridBackground>
)

export default SignInPage
