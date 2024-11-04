import clsx from 'clsx'
import { Loader as LoaderIcon, LucideProps } from 'lucide-react'

export const Loader = ({ className, ...props }: LucideProps) => (
	<LoaderIcon
		{...props}
		className={clsx('animate-spin text-slate-400', className)}
	/>
)
