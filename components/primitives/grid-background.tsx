import clsx from 'clsx'
import { ComponentProps } from 'react'

type Props = ComponentProps<'div'>

export const GridBackground = ({ children, className, ...props }: Props) => (
	<div
		{...props}
		className={clsx(
			'bg-grid-slate-700/[0.03] flex min-h-screen items-center justify-center gap-4',
			className
		)}
	>
		{children}
	</div>
)
