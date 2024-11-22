import Link from 'next/link'

import { BreadcrumbItem } from '@/components/complex/breadcrumbs/types'

import { BreadcrumbsItem } from './item'

type Props = BreadcrumbItem & { href: string }

export const BreadcrumbsLink = ({ href, ...item }: Props) => (
	<Link
		href={href}
		className='flex group transition duration-200 rounded-[6px]'
	>
		<BreadcrumbsItem {...item} href={href} />
	</Link>
)
