import { BreadcrumbItem } from '@/components/complex/breadcrumbs/types'
import { Skeleton } from '@/components/ui/skeleton'
import { cn } from '@/lib/utils'

type Props = BreadcrumbItem

export const BreadcrumbsItem = ({
	label,
	icon: Icon,
	href,
	isLoading,
}: Props) => (
	<>
		{!isLoading ? (
			<div className='flex items-center'>
				{Icon && (
					<div className='p-[6px] border shrink-0 rounded-[10px] transition duration-200 bg-white hover:bg-slate-50'>
						<Icon className='size-[16px] text-slate-500 transition duration-200 group-hover:text-slate-800' />
					</div>
				)}
				<span
					className={cn(
						'text-[14px] text-slate-500 transition duration-200 group-hover:text-slate-800',
						Icon && 'ml-2',
						!href && 'text-slate-800'
					)}
				>
					{label}
				</span>
			</div>
		) : (
			<Skeleton className='w-[180px] h-[30px] bg-slate-100' />
		)}
	</>
)
