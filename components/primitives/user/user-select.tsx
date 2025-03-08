import { Select, SelectTrigger, SelectValue } from '@/components/ui/select'

export const UserSelect = () => {
	return (
		<Select>
			<SelectTrigger>
				<SelectValue placeholder='Select a user' />
			</SelectTrigger>
		</Select>
	)
}
