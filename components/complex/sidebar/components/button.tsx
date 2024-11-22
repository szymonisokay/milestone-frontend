import { Button } from '@/components/ui/button'
import { SidebarItem } from '@/types/sidebar'

type Props = {
	onClick: () => void
} & SidebarItem

export const SidebarButton = ({ icon: Icon, label, onClick }: Props) => (
	<Button
		className='flex items-center justify-start w-full py-2 px-4 rounded-[10px] border-none shadow-none transition duration-200 bg-[#fcfcfc] hover:bg-gray-50'
		onClick={onClick}
	>
		<Icon className='size-[16px] text-slate-600' />
		<span className='ml-2 text-[14px] text-slate-600'>{label}</span>
	</Button>
)
