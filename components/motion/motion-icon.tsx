import { LucideIcon } from 'lucide-react'
import { motion } from 'motion/react'
import { ComponentProps, forwardRef } from 'react'

type Props = {
	icon: LucideIcon
} & ComponentProps<LucideIcon>

const Component = forwardRef<SVGSVGElement, Props>(
	({ icon: Icon, ...props }, ref) => {
		return <Icon ref={ref} {...props} />
	}
)

export const MotionIcon = motion.create(Component)
