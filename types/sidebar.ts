import { LucideIcon } from 'lucide-react'

type Link = {
	type: 'link'
	href: string
}

type Button = {
	type: 'button'
	onClick: () => void
}

export type SidebarItem = {
	label: string
	icon: LucideIcon
} & (Link | Button)
