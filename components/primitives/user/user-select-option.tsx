import { Text } from '@/components/primitives/text'
import { Avatar } from '@/components/primitives/user/avatar'
import { User } from '@/types/user'

type Props = {
	user: User
}

export const UserSelectOption = ({ user }: Props) => (
	<div className='flex items-center gap-2'>
		<Avatar user={user} className='rounded-md p-0 size-7' />
		<div className='flex flex-col mt-1'>
			<Text className='text-[12px] text-gray-900 font-semibold leading-none text-left'>
				{user.account.firstName} {user.account.lastName}
			</Text>
			<Text className='text-[12px] text-gray-500 '>{user.email}</Text>
		</div>
	</div>
)
