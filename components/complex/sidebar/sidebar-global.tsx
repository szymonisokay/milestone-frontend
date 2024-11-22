import { motion } from 'motion/react'

import { SidebarGroup } from '@/components/complex/sidebar/components'
import { defaultSidebarLinks } from '@/components/complex/sidebar/consts'

export const SidebarGlobal = () => {
	return (
		<motion.div
			initial={{ x: '-100%' }}
			animate={{ x: 0 }}
			exit={{ x: '-100%' }}
			transition={{ duration: 0.2, ease: 'linear' }}
		>
			<SidebarGroup
				group={defaultSidebarLinks}
				components={{ label: { className: 'mt-0' } }}
			/>
		</motion.div>
	)
}
