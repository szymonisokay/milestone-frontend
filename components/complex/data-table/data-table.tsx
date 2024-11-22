import { DataTableHeader } from '@/components/complex/data-table/components/data-table-header'
import { DataTableRow } from '@/components/complex/data-table/components/data-table-row'
import {
	TableHeaderProps,
	TableRowProps,
} from '@/components/complex/data-table/types'
import { Loader } from '@/components/loaders/loader'
import { useDataTable } from '@/hooks/use-data-table'

type Props<T> = {
	headers: TableHeaderProps[]
	rows?: T[]
	renderRow: (row: T) => TableRowProps
}

export const DataTable = <T extends object>({
	headers,
	rows,
	renderRow,
}: Props<T>) => {
	const { headerRefs } = useDataTable(rows)

	if (!rows) {
		return <Loader className='w-full m-auto' />
	}

	return (
		<div className='table w-full border border-gray-200/60 rounded-[10px] overflow-hidden'>
			<DataTableHeader headers={headers} refs={headerRefs} />
			{rows.map((row, index) => {
				const props = renderRow(row)

				return <DataTableRow key={index} {...props} />
			})}
		</div>
	)
}
