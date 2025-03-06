import { useSprintTasksContext } from '@/components/complex/sprint-tasks/sprint-tasks-provider'

import { PageLoader } from '@/components/loaders/page-loader'
import { Task } from './task'

export const Tasks = () => {
	const {
		sprint: { id: sprintId },
		tasks,
		isLoadingTasks,
	} = useSprintTasksContext()

	if (isLoadingTasks) {
		return (
			<PageLoader
				components={{
					wrapper: { className: 'py-8 border-t border-b' },
				}}
			/>
		)
	}

	if (tasks.length === 0) {
		return (
			<div className='p-4 text-center text-slate-500 text-[14px] border-t border-b'>
				No tasks yet
			</div>
		)
	}

	return (
		<div className='border-t border-b'>
			{tasks.map((task) => (
				<Task key={task.id} sprintId={sprintId} task={task} />
			))}
		</div>
	)
}
