import { Breadcrumbs } from '@/components/complex/breadcrumbs'
import { BreadcrumbItem } from '@/components/complex/breadcrumbs/types'
import { Heading } from '@/components/primitives/heading'
import { PropsWithChildren } from 'react'

type Props = {
	breadcrumbs: BreadcrumbItem[]
	title: string
}

export const PageHeader = ({
	breadcrumbs,
	title,
	children,
}: PropsWithChildren<Props>) => {
	return (
		<div className='p-4 space-y-4 border-b-2 border-gray-200/60'>
			<Breadcrumbs items={breadcrumbs} />
			<Heading
				title={title}
				components={{
					title: {
						className: 'text-[30px] font-semibold text-slate-800',
					},
				}}
			/>
			{children}
		</div>
	)
}
