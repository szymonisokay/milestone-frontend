import { motion } from 'motion/react'
import Link from 'next/link'
import { ComponentProps, forwardRef } from 'react'

const Component = forwardRef<HTMLAnchorElement, ComponentProps<typeof Link>>(
	(props, ref) => {
		return <Link ref={ref} {...props} />
	}
)

export const MotionLink = motion.create(Component)
