import { Task as TaskType } from '@/types/task'

import { Task } from './task'

type Props = {
	tasks: TaskType[]
}

export const Tasks = ({ tasks }: Props) => {
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
				<Task key={task.id} task={task} />
			))}
		</div>
	)
}
