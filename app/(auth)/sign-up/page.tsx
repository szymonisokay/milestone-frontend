import Link from 'next/link'

import { SignUpForm } from '@/components/forms/sign-up/form'
import { Heading } from '@/components/heading'

const SignUpPage = () => (
	<div className='bg-grid-small-black/[0.1] flex min-h-screen items-center justify-center gap-4'>
		<div className='absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]' />

		<div className='p-4 min-w-[350px] max-w-[350px] rounded-[10px] shadow-simple bg-white space-y-4 items-center justify-center'>
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

			<p className='text-[14px] text-center'>
				Already have an account?{' '}
				<Link href='/sign-in' className='text-[14px] text-slate-500'>
					Sign In
				</Link>
			</p>
		</div>
	</div>
)

export default SignUpPage
