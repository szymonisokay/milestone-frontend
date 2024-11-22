import { FolderOpenIcon, LayoutDashboardIcon } from 'lucide-react'

import { SidebarItem } from '@/types/sidebar'

export const defaultSidebarLinks: SidebarItem[] = [
	{
		type: 'link',
		href: '/dashboard',
		label: 'Dashboard',
		icon: LayoutDashboardIcon,
	},
	{
		type: 'link',
		href: '/projects',
		label: 'Projects',
		icon: FolderOpenIcon,
	},
]
