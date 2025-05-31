import { UserSelectOption } from '@/components/primitives/user/user-select-option'
import { Button } from '@/components/ui/button'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { useWorkspaceMembers } from '@/hooks/workspace/use-workspace-members'
import { User } from '@/types/user'

type Props = {
	value?: User | null
	onChange: (user: User | null) => void
}

export const UserSelect = ({ value, onChange }: Props) => {
	const { members } = useWorkspaceMembers()

	const selectedValue = members.find((member) => member.id === value?.id)

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button
					variant='outline'
					className='w-full rounded-md shadow-none justify-start h-auto px-3 py-1.5'
				>
					{selectedValue && <UserSelectOption user={selectedValue} />}
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align='start' className='w-[300px]'>
				{members.map((member) => (
					<DropdownMenuItem
						key={member.id}
						onClick={() => onChange(member)}
					>
						<UserSelectOption user={member} />
					</DropdownMenuItem>
				))}
			</DropdownMenuContent>
		</DropdownMenu>
	)
}
