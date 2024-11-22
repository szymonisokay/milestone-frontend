import { ShieldAlertIcon } from 'lucide-react'

import { Heading } from '@/components/primitives/heading'
import { IconBox } from '@/components/primitives/icon-box'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export const NoAccess = () => (
	<div className='flex flex-col h-full w-full items-center justify-center bg-slate-50 space-y-6'>
		<IconBox icon={ShieldAlertIcon} />
		<Heading
			title='You do not have access to this page'
			description="This page does not exist or you don't have access to it"
			components={{
				title: {
					className: 'text-2xl text-center leading-relaxed',
				},
				description: {
					className: 'text-center',
				},
			}}
		/>

		<Link href='/sign-in'>
			<Button>Navigate to Sign In</Button>
		</Link>
	</div>
)
