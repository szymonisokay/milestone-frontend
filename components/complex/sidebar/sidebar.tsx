import { AnimatePresence } from 'motion/react'
import { useParams } from 'next/navigation'

import { SidebarHeader } from '@/components/complex/sidebar/components'
import { SidebarProject } from '@/components/complex/sidebar/project'
import { SidebarGlobal } from '@/components/complex/sidebar/sidebar-global'

export const Sidebar = () => {
	const projectSymbol = useParams().symbol as string

	return (
		<div className='w-[300px] flex flex-col flex-shrink-0 p-4 border-r-2 border-gray-200/60 overflow-hidden'>
			<SidebarHeader />
			<AnimatePresence>
				<div className='relative'>
					{projectSymbol ? (
						<SidebarProject symbol={projectSymbol} />
					) : (
						<SidebarGlobal />
					)}
				</div>
			</AnimatePresence>
		</div>
	)
}
