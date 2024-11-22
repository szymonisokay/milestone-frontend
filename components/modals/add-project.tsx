'use client'

import { AddProjectForm } from '@/components/forms/add-project/form'
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog'
import { useModal } from '@/hooks/use-modal'

export const AddProjectModal = () => {
	const { type, isOpen, onClose } = useModal()

	return (
		<Dialog open={isOpen && type === 'add-project'} onOpenChange={onClose}>
			<DialogContent aria-describedby='add-project-modal'>
				<DialogTitle>Add Project</DialogTitle>
				<AddProjectForm />
			</DialogContent>
		</Dialog>
	)
}
