import { ComponentProps, ReactNode } from 'react'

export type TableHeaderProps = {
	key: string
	label?: string
	props?: ComponentProps<'div'> & { width?: string | number }
}

export type TableRowProps = {
	cells: TableCellProps[]
} & ComponentProps<'div'>

export type TableCellProps = {
	key: string
	component: ReactNode
	props?: ComponentProps<'div'>
}
