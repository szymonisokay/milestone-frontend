import {
	ChartPieIcon,
	CombineIcon,
	FrameIcon,
	MoreVerticalIcon,
	SettingsIcon,
	UsersIcon,
} from 'lucide-react'
import { MouseEvent } from 'react'

import {
	TableHeaderProps,
	TableRowProps,
} from '@/components/complex/data-table/types'
import { Text } from '@/components/primitives/text'
import { Project } from '@/types/projects'
import { SidebarItem } from '@/types/sidebar'

export const headers: TableHeaderProps[] = [
	{
		key: 'name',
		label: 'Name',
		props: {
			width: 200,
		},
	},
	{
		key: 'symbol',
		label: 'Symbol',
	},
	{
		key: 'actions',
		props: {
			className: 'flex-1',
		},
	},
]

type MapProjectsRowFuncProps = {
	row: Project
	onRowClick: (row: Project) => void
	onActionClick: (event: MouseEvent, row: Project) => void
}

export const mapProjectsRow = ({
	row,
	onRowClick,
	onActionClick,
}: MapProjectsRowFuncProps): TableRowProps => ({
	cells: [
		{
			key: 'name',
			component: <Text>{row.name}</Text>,
		},
		{
			key: 'symbol',
			component: <Text>{row.symbol}</Text>,
		},
		{
			key: 'actions',
			component: (
				<MoreVerticalIcon
					className='w-4 h-4 text-slate-500'
					onClick={(event) => onActionClick(event, row)}
				/>
			),
			props: {
				className: 'flex-1 justify-end',
			},
		},
	],
	onClick: () => onRowClick(row),
})

export const mapProjectToGroup = (symbol: string): SidebarItem[] => [
	{
		type: 'link',
		href: `/projects/${symbol}/overview`,
		label: 'Overview',
		icon: ChartPieIcon,
	},
	{
		type: 'link',
		href: `/projects/${symbol}/board`,
		label: 'Board',
		icon: FrameIcon,
	},
	{
		type: 'link',
		href: `/projects/${symbol}/backlog`,
		label: 'Backlog',
		icon: CombineIcon,
	},
	{
		type: 'link',
		href: `/projects/${symbol}/members`,
		label: 'Members',
		icon: UsersIcon,
	},
	{
		type: 'link',
		href: `/projects/${symbol}/settings`,
		label: 'Settings',
		icon: SettingsIcon,
	},
]
