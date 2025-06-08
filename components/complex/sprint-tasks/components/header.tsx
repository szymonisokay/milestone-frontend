import { useParams } from 'next/navigation'

import { useSprintTasksContext } from '@/components/complex/sprint-tasks/sprint-tasks-provider'
import { Heading } from '@/components/primitives/heading'
import { Button } from '@/components/ui/button'
import { useProject } from '@/hooks/projects/use-project'
import { useCreateSprint } from '@/hooks/sprints/use-create-sprint'
import { useUpdateSprint } from '@/hooks/sprints/use-update-sprint'

export const Header = () => {
	const { symbol: projectSymbol } = useParams()
	const {
		sprint: { name, goal, isActive, id: sprintId },
		tasks,
	} = useSprintTasksContext()
	const { project } = useProject(projectSymbol as string)
	const { onCreateSprint } = useCreateSprint()
	const { onUpdateSprint } = useUpdateSprint(sprintId)

	const tasksCount = tasks.length
	const isBacklog = name === 'Backlog'

	const onSprintAction = () => {
		if (!project) return

		if (isBacklog) {
			onCreateSprint(project.id)
		} else {
			onUpdateSprint({
				isActive: true,
			})
		}
	}

	return (
		<div className='flex items-center justify-between py-2 px-4'>
			<div className='flex space-x-2'>
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

			{!isActive && (
				<Button
					onClick={onSprintAction}
					className='bg-slate-700 hover:bg-slate-600 shadow-none text-white py-1 px-2 h-auto rounded-[8px]'
				>
					{isBacklog ? 'Create sprint' : 'Start sprint'}
				</Button>
			)}
		</div>
	)
}
