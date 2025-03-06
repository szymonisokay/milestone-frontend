import { useSprintTasksContext } from '@/components/complex/sprint-tasks/sprint-tasks-provider'
import { useAddTask } from '@/hooks/tasks/use-add-task'
import { HttpError } from '@/utils/error'
import { toast } from 'sonner'
import { Footer, Header, Tasks } from './components'

export const SprintTasks = () => {
	const {
		sprint: { id: sprintId },
	} = useSprintTasksContext()

	const { onAddTask } = useAddTask(sprintId)

	const onAddTaskToSprint = (name: string) => {
		toast.promise(onAddTask({ name }), {
			loading: 'Creating task...',
			success: () => 'Task created successfully!',
			error: (error: HttpError) => error.message,
		})
	}

	return (
		<div className='bg-gray-50/50 border rounded-[10px]'>
			<Header />
			<Tasks />
			<Footer onAddTask={onAddTaskToSprint} />
		</div>
	)
}
