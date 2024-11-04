import Link from 'next/link'

import { SignInForm } from '@/components/forms/sign-in/form'
import { Heading } from '@/components/heading'

const SignInPage = () => (
	<div className='bg-grid-small-black/[0.1] flex min-h-screen items-center justify-center gap-4'>
		<div className='absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]' />

		<div className='p-4 min-w-[350px] max-w-[350px] rounded-[10px] shadow-simple bg-white space-y-4 items-center justify-center'>
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

			<p className='text-[14px] text-center'>
				Don't have an account?{' '}
				<Link href='/sign-up' className='text-[14px] text-slate-500'>
					Sign up
				</Link>
			</p>
		</div>
	</div>
)

export default SignInPage
