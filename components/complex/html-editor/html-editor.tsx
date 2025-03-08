import Placeholder from '@tiptap/extension-placeholder'
import Underline from '@tiptap/extension-underline'
import { EditorContent, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { ComponentProps, useMemo, useState } from 'react'

import { cn } from '@/lib/utils'

import { Controls } from './controls'
import { Header } from './header'
import { MainMenu } from './menus/main-menu'

type Components = {
	wrapper?: ComponentProps<'div'>
}

type Props = {
	content: string
	placeholder?: string
	components?: Components
	label?: string
	onSave: (content: string) => void
}

const HtmlEditor = ({
	content,
	placeholder,
	components,
	label,
	onSave,
}: Props) => {
	const [isFocused, setIsFocused] = useState(false)

	const extensions = useMemo(
		() => [StarterKit, Underline, Placeholder.configure({ placeholder })],
		[placeholder]
	)

	const editor = useEditor({
		extensions,
		content,
		immediatelyRender: false,
		editorProps: {
			attributes: {
				class: cn(
					'outline-none focus:outline-none p-4 focus:bg-gray-100/70 focus:border-gray-300 hover:bg-gray-100/40 transition-all duration-300 border border-gray-200 rounded-[10px] break-all',
					isFocused && 'rounded-t-none'
				),
			},
		},
	})

	const handleSave = (content: string) => {
		onSave(content)
		setIsFocused(false)
	}

	if (!editor) {
		return null
	}

	return (
		<div {...components?.wrapper}>
			<Header label={label} />
			{isFocused && <MainMenu editor={editor} />}
			<EditorContent
				editor={editor}
				placeholder='place'
				onFocus={() => setIsFocused(true)}
			/>
			{isFocused && (
				<Controls
					editor={editor}
					content={content}
					onSave={handleSave}
					onCancel={() => setIsFocused(false)}
				/>
			)}
		</div>
	)
}

export default HtmlEditor
