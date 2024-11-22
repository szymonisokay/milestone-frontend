import clsx from 'clsx'
import { ComponentProps } from 'react'

type Props = ComponentProps<'div'>

export const Card = ({ children, className, ...props }: Props) => (
	<div
		{...props}
		className={clsx(
			'p-4 min-w-[350px] max-w-[350px] rounded-[10px] shadow-simple bg-white space-y-4 items-center justify-center',
			className
		)}
	>
		{children}
	</div>
)
