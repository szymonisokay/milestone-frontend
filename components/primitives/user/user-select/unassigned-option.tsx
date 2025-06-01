import { UserIcon } from 'lucide-react'

import { Text } from '@/components/primitives/text'

type Props = {
	name: string
	onlyAvatar?: boolean
}

export const UnassignedOption = ({ name, onlyAvatar = false }: Props) => (
	<div className='flex items-center gap-2'>
		<div className='flex items-center justify-center rounded-md p-0 size-7 border border-dashed bg-white border-gray-200'>
			<UserIcon className='size-4 text-gray-700' />
		</div>
		{!onlyAvatar && (
			<div className='flex flex-col mt-[2px]'>
				<Text className='text-[12px] text-gray-900 font-semibold leading-none text-left'>
					{name}
				</Text>
			</div>
		)}
	</div>
)
