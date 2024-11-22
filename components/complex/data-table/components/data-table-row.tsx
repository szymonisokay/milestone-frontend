import { TableRowProps } from '@/components/complex/data-table/types'
import { cn } from '@/lib/utils'

type Props = TableRowProps

export const DataTableRow = ({ cells, ...props }: Props) => {
	return (
		<div
			{...props}
			data-type='row'
			className={cn('flex hover:bg-gray-50', props?.className)}
		>
			{cells.map(({ key, component, props }, index) => (
				<div
					{...props}
					key={key}
					data-type='cell'
					data-position={index}
					className={cn(
						'p-4 flex items-center border-r last-of-type:border-r-0 border-gray-200/60 cursor-pointer',
						props?.className
					)}
				>
					{component}
				</div>
			))}
		</div>
	)
}
