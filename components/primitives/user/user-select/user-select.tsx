import { UnassignedOption } from '@/components/primitives/user/user-select/unassigned-option'
import { UserOption } from '@/components/primitives/user/user-select/user-option'
import { Button } from '@/components/ui/button'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { UNASSIGNED_USER } from '@/config/constants'
import { useWorkspaceMembers } from '@/hooks/workspace/use-workspace-members'
import { cn } from '@/lib/utils'
import { User } from '@/types/user'

type Props = {
	value?: string | null
	withUnassigned?: boolean
	onlyAvatar?: boolean
	onChange: (userId: string | null) => void
}

export const UserSelect = ({
	value,
	withUnassigned = false,
	onlyAvatar = false,
	onChange,
}: Props) => {
	const { members } = useWorkspaceMembers()
	const options = withUnassigned ? [...members, UNASSIGNED_USER] : members

	const selectedValue = !value
		? UNASSIGNED_USER
		: members.find((member) => member.id === value)

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button
					variant='outline'
					className={cn(
						'w-full rounded-md shadow-none justify-start h-auto px-2 py-1.5',
						onlyAvatar && 'p-0 w-auto border-none'
					)}
				>
					{selectedValue && 'name' in selectedValue ? (
						<UnassignedOption
							onlyAvatar={onlyAvatar}
							name={selectedValue.name}
						/>
					) : (
						<UserOption
							onlyAvatar={onlyAvatar}
							user={selectedValue as User}
						/>
					)}
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent
				align={onlyAvatar ? 'end' : 'start'}
				className='w-[250px]'
			>
				{options.map((option) => (
					<DropdownMenuItem
						key={option.id}
						onClick={(event) => {
							event.stopPropagation()

							onChange('name' in option ? null : option.id)
						}}
						className={cn('mt-1 first-of-type:mt-0')}
					>
						{'name' in option ? (
							<UnassignedOption name={option.name} />
						) : (
							<UserOption showEmail user={option as User} />
						)}
					</DropdownMenuItem>
				))}
			</DropdownMenuContent>
		</DropdownMenu>
	)
}
