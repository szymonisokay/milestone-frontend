import { Text } from '@/components/primitives/text'
import { cn } from '@/lib/utils'
import { User } from '@/types/user'
import { getInitials } from '@/utils/users'

type Props = {
	user: User
	className?: string
}

export const Avatar = ({ user, className }: Props) => {
	const initials = getInitials(
		user?.account?.firstName,
		user?.account?.lastName
	)

	return (
		<div
			className={cn(
				'p-2 border size-[34px] shrink-0 rounded-[10px] bg-white relative grid place-content-center',
				className
			)}
		>
			<Text className='text-[10px]'>{initials}</Text>
		</div>
	)
}
