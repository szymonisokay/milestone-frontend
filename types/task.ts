import { MemberRoles } from '@/types/role'
import { User } from '@/types/user'

type Member = {
	id: string
	member: User
	role: MemberRoles
}

export type Task = {
	id: string
	identifier: string
	name: string
	description?: string
	creator: Member
	assignee?: Member | null
}

export type AddTask = {
	name: string
}

export type UpdateTask = Omit<Partial<Task>, 'id' | 'identifier'>
