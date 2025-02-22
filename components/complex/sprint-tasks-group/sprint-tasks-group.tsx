import { useAddTask } from '@/hooks/tasks/use-add-task'
import { Sprint } from '@/types/sprint'
import { HttpError } from '@/utils/error'
import { toast } from 'sonner'
import { Footer, Header, Tasks } from './components'

type Props = {
	sprint: Sprint
}

export const SprintTasksGroup = ({ sprint }: Props) => {
	const { id, name, goal, tasks } = sprint

	const { onAddTask } = useAddTask(id)

	const onAddTaskToSprint = (name: string) => {
		toast.promise(onAddTask({ name }), {
			loading: 'Creating task...',
			success: () => 'Task created successfully!',
			error: (error: HttpError) => error.message,
		})
	}

	return (
		<div className='bg-gray-50/50 border rounded-[10px]'>
			<Header name={name} goal={goal} tasksCount={tasks.length} />
			<Tasks tasks={tasks} sprintId={sprint.id} />
			<Footer onAddTask={onAddTaskToSprint} />
		</div>
	)
}
