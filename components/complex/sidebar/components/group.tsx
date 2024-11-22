import { ComponentProps } from 'react'

import {
	SidebarButton,
	SidebarLink,
} from '@/components/complex/sidebar/components'
import { cn } from '@/lib/utils'
import { SidebarItem } from '@/types/sidebar'

type Components = {
	wrapper?: ComponentProps<'div'>
	label?: ComponentProps<'label'>
}

type Props = {
	group: SidebarItem[]
	groupLabel?: string
	components?: Components
}

const mapItems = (item: SidebarItem) => {
	switch (item.type) {
		case 'link':
			return <SidebarLink key={item.label} {...item} />
		case 'button':
			return <SidebarButton key={item.label} {...item} />
	}
}

export const SidebarGroup = ({ group, groupLabel, components }: Props) => (
	<>
		{groupLabel && (
			<label
				{...components?.label}
				className={cn(
					'text-[12px] text-slate-500 uppercase inline-block mt-8 mb-2',
					components?.label?.className
				)}
			>
				{groupLabel}
			</label>
		)}
		<div
			{...components?.wrapper}
			className={cn('space-y-2', components?.wrapper?.className)}
		>
			{group.map((item) => mapItems(item))}
		</div>
	</>
)
