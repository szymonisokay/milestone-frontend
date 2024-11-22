import * as React from 'react'

import { cn } from '@/lib/utils'

const Textarea = React.forwardRef<
	HTMLTextAreaElement,
	React.ComponentProps<'textarea'>
>(({ className, ...props }, ref) => {
	return (
		<textarea
			className={cn(
				'flex min-h-[60px] w-full rounded-[10px] border-none shadow-simple bg-transparent transition duration-300 px-3 py-2 text-base placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-400/50 focus-visible:bg-slate-50/70 hover:bg-slate-50/70 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
				className
			)}
			ref={ref}
			{...props}
		/>
	)
})
Textarea.displayName = 'Textarea'

export { Textarea }