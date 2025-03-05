import { Editor } from '@tiptap/react'

import { Button } from '@/components/ui/button'

type Props = {
	editor: Editor
	content: string
	onSave: (content: string) => void
	onCancel: () => void
}

export const Controls = ({ editor, content, onSave, onCancel }: Props) => {
	return (
		<div className='flex justify-end items-center gap-2 mt-2'>
			<Button variant='ghost' className='h-auto py-1' onClick={onCancel}>
				Cancel
			</Button>
			<Button
				disabled={editor.getHTML() === content}
				className='h-auto py-1'
				onClick={() => onSave(editor.getHTML())}
			>
				Save
			</Button>
		</div>
	)
}
