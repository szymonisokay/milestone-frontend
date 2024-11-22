import { Card } from '@/components/primitives/card'
import { GridBackground } from '@/components/primitives/grid-background'
import { Heading } from '@/components/primitives/heading'
import { PropsWithChildren } from 'react'

type Props = {
	title: string
	description?: string
}

export const OnboardingWrapper = ({
	title,
	description,
	children,
}: PropsWithChildren<Props>) => (
	<GridBackground className='flex items-center justify-center min-h-full bg-slate-50'>
		<Card className='bg-slate-50 min-w-[420px]'>
			<Heading
				title={title}
				description={description}
				components={{
					title: { className: 'text-[28px] font-black text-center' },
					description: { className: 'text-center text-sm' },
					wrapper: { className: 'mb-8 space-y-1' },
				}}
			/>
			{children}
		</Card>
	</GridBackground>
)
