import HtmlEditor from '@/components/complex/html-editor/html-editor'
import { useManageTaskContext } from '@/components/complex/manage-task/manage-task-provider'
import { useUpdateTask } from '@/hooks/tasks/use-update-task'

export const TaskDescription = () => {
	const { task, isLoading, sprintId } = useManageTaskContext()
	const { onUpdateTask } = useUpdateTask(sprintId, task?.id as string)

	if (isLoading) return null

	return (
		<HtmlEditor
			label='Description'
			content={task?.description ?? ''}
			components={{ wrapper: { className: 'mt-4' } }}
			onSave={(description) => onUpdateTask({ description })}
		/>
	)
}
