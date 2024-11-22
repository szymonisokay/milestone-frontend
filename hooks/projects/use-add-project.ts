import { QUERY_KEYS } from '@/config/query-keys'
import { useModal } from '@/hooks/use-modal'
import { addProject } from '@/services/projects.service'
import { AddProjectData } from '@/types/projects'
import { useMutation, useQueryClient } from '@tanstack/react-query'

export const useAddProject = () => {
	const queryClient = useQueryClient()
	const { onClose } = useModal()
	const { mutateAsync, isPending } = useMutation({
		mutationFn: (data: AddProjectData) => addProject(data),
		onSuccess: () => {
			onClose()
			queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.PROJECTS] })
		},
	})

	const onAddProject = async (data: AddProjectData) => await mutateAsync(data)

	return {
		onAddProject,
		isPending,
	}
}
