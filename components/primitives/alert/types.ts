import {
	AlertDescription,
	AlertTitle,
	Alert as AlertWrapper,
} from '@/components/ui/alert'
import {
	CircleAlertIcon,
	LucideIcon,
	OctagonAlertIcon,
	TriangleAlertIcon,
} from 'lucide-react'
import { ComponentProps } from 'react'

export type AlertVariant = 'info' | 'warning' | 'error' | 'success'

type Components = {
	wrapper?: ComponentProps<typeof AlertWrapper>
	icon?: ComponentProps<LucideIcon>
	title?: ComponentProps<typeof AlertTitle>
	description?: ComponentProps<typeof AlertDescription>
}

type VariantProps = {
	Icon: LucideIcon
} & Components

export type AlertProps = {
	title?: string
	description?: string
	variant?: AlertVariant
	components?: Components
}

export const variants: Record<AlertVariant, VariantProps> = {
	info: {
		Icon: CircleAlertIcon,
		wrapper: {
			className: 'border-none shadow-simple bg-gray-50',
		},
		icon: {
			className: 'w-[16px] h-[16px] !text-slate-500',
		},
		title: {
			className: 'text-xl font-bold text-slate-700',
		},
		description: {
			className: 'text-[12px] text-slate-500',
		},
	},
	warning: {
		Icon: TriangleAlertIcon,
		wrapper: {
			className: 'border-orange-500 bg-orange-50',
		},
		icon: {
			className: 'w-[16px] h-[16px] !text-orange-500',
		},
		title: {
			className: 'text-xl font-bold text-orange-600',
		},
		description: {
			className: 'text-[12px] text-orange-500',
		},
	},
	error: {
		Icon: OctagonAlertIcon,
		wrapper: {
			className: 'border-red-500 bg-red-50',
		},
		icon: {
			className: 'w-[16px] h-[16px] !text-red-500',
		},
		title: {
			className: 'text-xl font-bold text-red-600',
		},
		description: {
			className: 'text-[12px] text-red-500',
		},
	},
	success: {
		Icon: CircleAlertIcon,
		wrapper: {
			className: 'border-green-500 bg-green-50',
		},
		icon: {
			className: 'w-[16px] h-[16px] !text-green-500',
		},
		title: {
			className: 'text-xl font-bold text-green-600',
		},
		description: {
			className: 'text-[12px] text-green-500',
		},
	},
}
