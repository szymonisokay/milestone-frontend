import clsx from 'clsx'
import Link from 'next/link'
import { ComponentProps } from 'react'

type Components = {
	paragraph?: ComponentProps<'p'>
	link?: ComponentProps<typeof Link>
}

type Props = {
	text?: string
	linkText?: string
	href?: string
	components?: Components
}

export const TextWithLink = ({ text, linkText, href, components }: Props) => (
	<p
		{...components?.paragraph}
		className={clsx(
			'text-[14px] text-center',
			components?.paragraph?.className
		)}
	>
		{text}{' '}
		{linkText && href && (
			<Link
				{...components?.link}
				href={href}
				className={clsx(
					'text-[14px] text-slate-500',
					components?.link?.className
				)}
			>
				{linkText}
			</Link>
		)}
	</p>
)
