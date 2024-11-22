import { ArrowLeftIcon, FolderOpenIcon } from 'lucide-react'

import { MotionIcon, MotionLink } from '@/components/motion'

type Props = {
	name: string
}

export const SidebarProjectHeader = ({ name }: Props) => {
	const iconClassName = 'size-4 text-slate-500 shrink-0 absolute'

	const arrowIconVariants = {
		initial: {
			opacity: 0,
		},
		hover: {
			opacity: 1,
		},
	}

	const folderIconVariants = {
		initial: {
			opacity: 1,
		},
		hover: {
			opacity: 0,
		},
	}

	return (
		<MotionLink
			href='/projects'
			className='flex items-center justify-start px-3 py-2 hover:bg-gray-100 rounded-[10px] transition duration-200'
			initial={folderIconVariants.initial}
			animate='initial'
			whileHover='hover'
		>
			<div className='p-2 border shrink-0 size-[34px] rounded-[10px] bg-white relative'>
				<>
					<MotionIcon
						icon={ArrowLeftIcon}
						className={iconClassName}
						variants={arrowIconVariants}
					/>

					<MotionIcon
						icon={FolderOpenIcon}
						className={iconClassName}
						variants={folderIconVariants}
					/>
				</>
			</div>
			<div className='flex flex-col ml-3 min-w-0'>
				<span className='text-[14px] text-slate-500 truncate'>
					{name}
				</span>
				<span className='text-[12px] text-slate-500/60'>
					Software project
				</span>
			</div>
		</MotionLink>
	)
}
