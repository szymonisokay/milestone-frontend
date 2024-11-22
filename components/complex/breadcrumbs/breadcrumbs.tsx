'use client'

import {
	BreadcrumbsItem,
	BreadcrumbsLink,
	BreadcrumbsSeparator,
} from '@/components/complex/breadcrumbs/components'

import { Fragment } from 'react'
import { BreadcrumbItem } from './types'

type Props = {
	items: BreadcrumbItem[]
}

export const Breadcrumbs = ({ items }: Props) => {
	return (
		<div className='flex items-center space-x-2'>
			{items?.map(({ href, ...item }, index) => (
				<Fragment key={index}>
					{href ? (
						<BreadcrumbsLink {...item} href={href} />
					) : (
						<BreadcrumbsItem {...item} />
					)}

					{index < items.length - 1 && <BreadcrumbsSeparator />}
				</Fragment>
			))}
		</div>
	)
}
