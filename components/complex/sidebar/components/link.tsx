'use client'

import { cn } from '@/lib/utils'
import { SidebarItem } from '@/types/sidebar'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

type Props = {
	href: string
} & SidebarItem

export const SidebarLink = ({ href, label, icon: Icon }: Props) => {
	const pathname = usePathname()
	const isActive = pathname.includes(href)

	return (
		<Link
			href={href}
			className={cn(
				'flex items-center py-2 px-4 rounded-[10px] transition duration-200 hover:bg-gray-100',
				isActive && 'bg-gray-100'
			)}
		>
			<Icon className='size-[16px] text-slate-500' />
			<span className='ml-2 text-[14px] text-slate-500'>{label}</span>
		</Link>
	)
}
