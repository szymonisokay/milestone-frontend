import { LucideIcon } from 'lucide-react'
import { ComponentProps } from 'react'

import { cn } from '@/lib/utils'

type Components = {
	wrapper?: ComponentProps<'div'>
	icon: ComponentProps<LucideIcon>
}

type Props = {
	icon: LucideIcon
	components?: Components
}

export const IconBox = ({ icon: Icon, components }: Props) => (
	<div
		{...components?.wrapper}
		className={cn(
			'p-4 shadow-simple rounded-[10px] bg-white',
			components?.wrapper?.className
		)}
	>
		<Icon
			{...components?.icon}
			className={cn(
				'size-[48px] text-slate-800',
				components?.icon?.className
			)}
		/>
	</div>
)
