import { useSprintTasksContext } from '@/components/complex/sprint-tasks/sprint-tasks-provider'
import { Heading } from '@/components/primitives/heading'
import { Button } from '@/components/ui/button'

export const Header = () => {
	const {
		sprint: { name, goal },
		tasks,
	} = useSprintTasksContext()
	const tasksCount = tasks.length

	return (
		<div className='flex items-center justify-between py-2 px-4'>
			<div className='flex items-center space-x-2'>
				<Heading
					title={name}
					description={goal}
					components={{
						title: {
							className: '!text-[14px] font-semibold',
						},
						description: {
							className: '!text-[12px] font-normal',
						},
					}}
				/>
				<span className='text-[12px] text-slate-500'>
					Tasks: {tasksCount}
				</span>
			</div>

			<Button className='bg-slate-700 hover:bg-slate-600 shadow-none text-white py-1 px-2 h-auto rounded-[8px]'>
				Start sprint
			</Button>
		</div>
	)
}
