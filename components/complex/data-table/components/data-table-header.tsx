import { TableHeaderProps } from '@/components/complex/data-table/types'
import { Text } from '@/components/primitives/text'
import { cn } from '@/lib/utils'
import { MutableRefObject } from 'react'

type Props = {
	headers: TableHeaderProps[]
	refs: MutableRefObject<HTMLDivElement[]>
}

export const DataTableHeader = ({ headers, refs }: Props) => {
	return (
		<div className='flex bg-gray-50/20'>
			{headers.map(({ key, label, props }, index) => (
				<div
					{...props}
					ref={(el) => {
						refs.current[index] = el!
					}}
					key={key}
					style={{ width: props?.width }}
					data-width={props?.width}
					className={cn(
						'p-4 border-r border-b border-gray-200/60 last-of-type:border-r-0',
						!!label && 'hover:bg-gray-50',
						props?.className
					)}
				>
					<Text>{label}</Text>
				</div>
			))}
		</div>
	)
}
