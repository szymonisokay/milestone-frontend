import Uderline from '@tiptap/extension-underline'
import { EditorContent, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'

import { Text } from '@/components/primitives/text'
import { Button } from '@/components/ui/button'
import { ComponentProps } from 'react'
import { MainMenu } from './menus/main-menu'

const extensions = [StarterKit, Uderline]

type Components = {
	wrapper?: ComponentProps<'div'>
}

type Props = {
	content: string
	components?: Components
	onSave: (content: string) => void
}

const HtmlEditor = ({ content, components, onSave }: Props) => {
	const editor = useEditor({
		extensions,
		content,
		immediatelyRender: false,
		editorProps: {
			attributes: {
				class: 'focus:outline-none p-4 focus:bg-gray-100/70 focus:border-gray-300 hover:bg-gray-100/40 transition-colors duration-300 border border-gray-200  rounded-[10px] rounded-t-none hyphens-auto',
			},
		},
	})

	if (!editor) {
		return null
	}

	return (
		<div {...components?.wrapper}>
			<MainMenu editor={editor} />
			<div>
				<EditorContent editor={editor} />
				<div className='flex mt-2'>
					<Text>Preview</Text>
					<div className='ml-auto flex items-center gap-2'>
						<Button variant='ghost'>Cancel</Button>
						<Button
							disabled={editor.getHTML() === content}
							onClick={() => onSave(editor.getHTML())}
						>
							Save
						</Button>
					</div>
				</div>
			</div>
			{/* <FloatingMenu editor={editor}>
				This is the floating menu
			</FloatingMenu>
			<BubbleMenu editor={editor}>This is the bubble menu</BubbleMenu> */}
		</div>
	)
}

export default HtmlEditor
