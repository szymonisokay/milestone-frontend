import { ChevronsUpDownIcon } from 'lucide-react'

import { Avatar } from '@/components/primitives/user/avatar'
import { UserDetails } from '@/components/primitives/user/user-details'
import { UserMenu } from '@/components/primitives/user/user-menu'
import { useActiveUser } from '@/hooks/user/use-active-user'

export const SidebarHeader = () => {
	const { user } = useActiveUser()

	if (!user) return null

	return (
		<UserMenu user={user}>
			<div className='flex items-center justify-start px-3 py-2 bg-gray-100 border border-transparent hover:border-border rounded-[10px] transition duration-200 mb-8 cursor-pointer'>
				<Avatar user={user} />
				<UserDetails user={user} />

				<ChevronsUpDownIcon className='ml-auto size-[16px] text-slate-400' />
			</div>
		</UserMenu>
	)
}
