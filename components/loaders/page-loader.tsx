import { LucideProps } from 'lucide-react'
import { ComponentProps } from 'react'

import { Loader } from '@/components/loaders/loader'
import clsx from 'clsx'

type Props = {
	components?: {
		wrapper?: ComponentProps<'div'>
		loader?: LucideProps
	}
}

export const PageLoader = ({ components }: Props) => (
	<div
		{...components?.wrapper}
		className={clsx(
			'flex h-full w-full items-center justify-center',
			components?.wrapper?.className
		)}
	>
		<Loader {...components?.loader} />
	</div>
)
