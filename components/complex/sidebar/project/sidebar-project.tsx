import { motion } from 'motion/react'

import { useProject } from '@/hooks/projects/use-project'

import { SidebarGroup } from '@/components/complex/sidebar/components'
import { mapProjectToGroup } from '@/utils/projects'
import { SidebarProjectHeader } from './header'

type Props = {
	symbol: string
}

export const SidebarProject = ({ symbol }: Props) => {
	const { project } = useProject(symbol)

	if (!project) {
		return null
	}

	return (
		<motion.div
			initial={{ left: '100%' }}
			animate={{ left: 0 }}
			exit={{ left: '100%' }}
			transition={{ duration: 0.2, ease: 'linear' }}
			className='absolute top-0 left-0 w-full'
		>
			<SidebarProjectHeader name={project.name} />
			<SidebarGroup
				groupLabel='Planning'
				group={mapProjectToGroup(project.symbol)}
			/>
		</motion.div>
	)
}
