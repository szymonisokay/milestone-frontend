import { User } from '@/types/user'

type Props = {
	user: User
}

export const UserDetails = ({ user }: Props) => {
	const { email, account } = user

	return (
		<div className='flex flex-col ml-3 min-w-0'>
			<span className='text-[14px] text-slate-500 truncate'>
				{`${account?.firstName} ${account?.lastName}`}
			</span>
			<span className='text-[12px] text-slate-500/60'>{email}</span>
		</div>
	)
}
