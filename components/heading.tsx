import clsx from 'clsx'
import { ComponentProps, ReactNode } from 'react'

type Components = {
	wrapper?: ComponentProps<'div'>
	title?: ComponentProps<'h2'>
	description?: ComponentProps<'p'>
	divider?: ComponentProps<'div'> & { show?: 'true' | 'false' }
}

type Props = {
	title: string
	description?: ReactNode
	components?: Components
}

export const Heading = ({ title, description, components }: Props) => (
	<div {...components?.wrapper}>
		<h2
			{...components?.title}
			className={clsx(
				'text-xl font-black text-slate-900 leading-tight',
				components?.title?.className
			)}
		>
			{title}
		</h2>
		<p
			{...components?.description}
			className={clsx(
				'text-[14px] text-slate-500',
				components?.description?.className
			)}
		>
			{description}
		</p>

		{components?.divider?.show === 'true' && (
			<div
				{...components?.divider}
				className={clsx(
					'h-[1px] bg-slate-200 mt-4',
					components?.divider.className
				)}
			/>
		)}
	</div>
)
