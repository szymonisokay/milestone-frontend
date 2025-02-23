'use client'

import { ManageTask } from '@/components/complex/manage-task/manage-task'
import { ManageTaskProvider } from '@/components/complex/manage-task/manage-task-provider'
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog'
import { useModal } from '@/hooks/use-modal'
import { DialogDescription } from '@radix-ui/react-dialog'

type UseModalDataProps = {
	taskId: string
	sprintId: string
}

const elementsToPreventClosingModal = ['.action']

export const ManageTaskModal = () => {
	const {
		type,
		isOpen,
		data: { taskId, sprintId } = {},
		onClose,
	} = useModal<UseModalDataProps>()

	const onEscapeKeyDown = (e: KeyboardEvent) => {
		const elements = [
			...elementsToPreventClosingModal
				.map((selector) =>
					[...document.querySelectorAll(selector)].flat()
				)
				.flat(),
		]

		if (!elements.length) return

		e.preventDefault()
	}

	const onOpenAutoFocus = () => {
		const title = document.querySelector(
			'.manage-task-title'
		) as HTMLElement

		setTimeout(() => title?.focus(), 0)
	}

	return (
		<Dialog open={isOpen && type === 'manage-task'} onOpenChange={onClose}>
			<DialogContent
				onEscapeKeyDown={onEscapeKeyDown}
				onOpenAutoFocus={onOpenAutoFocus}
				className='top-4 right-4 max-w-[50%] left-auto h-[calc(100dvh-32px)] translate-x-0 translate-y-0 data-[state=closed]:slide-out-to-right-1/2 data-[state=closed]:slide-out-to-top-0 data-[state=open]:slide-in-from-right-1/2 data-[state=open]:slide-in-from-top-0'
			>
				<DialogTitle className='sr-only'>Manage task</DialogTitle>
				<DialogDescription className='sr-only'>
					Manage task
				</DialogDescription>
				<div
					tabIndex={0}
					aria-hidden
					className='sr-only manage-task-title'
				/>

				<ManageTaskProvider sprintId={sprintId} taskId={taskId}>
					<ManageTask />
				</ManageTaskProvider>
			</DialogContent>
		</Dialog>
	)
}
