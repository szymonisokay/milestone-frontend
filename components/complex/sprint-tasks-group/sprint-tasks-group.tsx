import { Sprint } from '@/types/sprint'
import { Footer, Header, Tasks } from './components'

type Props = {
	sprint: Sprint
}

export const SprintTasksGroup = ({ sprint }: Props) => {
	const { name, goal, tasks } = sprint

	return (
		<div className='bg-gray-50/50 border rounded-[10px]'>
			<Header name={name} goal={goal} tasksCount={tasks.length} />
			<Tasks tasks={tasks} />
			<Footer />
		</div>
	)
}
