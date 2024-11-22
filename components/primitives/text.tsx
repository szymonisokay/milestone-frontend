import { ComponentProps } from 'react'

import { cn } from '@/lib/utils'

type Props = ComponentProps<'span'>

export const Text = ({ children, ...props }: Props) => (
	<span
		{...props}
		className={cn('text-[14px] text-slate-600 truncate', props?.className)}
	>
		{children}
	</span>
)
