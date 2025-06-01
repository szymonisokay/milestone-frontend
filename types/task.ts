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
	creator: User
	assignee?: User | null
	status: TaskStatus
}

export type AddTask = {
	name: string
}

export type UpdateTask = {
	name?: string
	description?: string
	assigneeId?: string | null
	status?: TaskStatus
}

export type TaskStatus = {
	id: string
	name: string
	isCustom: boolean
	workspaceId: string | null
}
