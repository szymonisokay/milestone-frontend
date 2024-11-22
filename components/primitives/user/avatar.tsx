import { Text } from '@/components/primitives/text'
import { User } from '@/types/user'
import { getInitials } from '@/utils/users'

type Props = {
	user: User
}

export const Avatar = ({ user }: Props) => {
	const initials = getInitials(
		user?.account?.firstName,
		user?.account?.lastName
	)

	return (
		<div className='p-2 border size-[34px] shrink-0 rounded-[10px] bg-white relative grid place-content-center'>
			<Text className='text-[10px]'>{initials}</Text>
		</div>
	)
}
