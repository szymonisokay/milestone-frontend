import { Editor } from '@tiptap/react'
import {
	BoldIcon,
	ItalicIcon,
	StrikethroughIcon,
	UnderlineIcon,
} from 'lucide-react'

import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'

type Props = {
	editor: Editor | null
}

export const MainMenu = ({ editor }: Props) => {
	if (!editor) {
		return null
	}

	const isBold = editor.isActive('bold') ? 'bold' : ''
	const isItalic = editor.isActive('italic') ? 'italic' : ''
	const isUnderline = editor.isActive('underline') ? 'underline' : ''
	const isStrike = editor.isActive('strike') ? 'strike' : ''

	return (
		<div className='border border-b-0 border-gray-200 rounded-t-[10px] p-1'>
			<ToggleGroup
				type='multiple'
				value={[isBold, isItalic, isUnderline, isStrike]}
				className='justify-start'
			>
				<ToggleGroupItem
					value='bold'
					aria-label='Toggle bold'
					onClick={() => editor.chain().focus().toggleBold().run()}
				>
					<BoldIcon />
				</ToggleGroupItem>
				<ToggleGroupItem
					value='italic'
					aria-label='Toggle italic'
					onClick={() => editor.chain().focus().toggleItalic().run()}
				>
					<ItalicIcon />
				</ToggleGroupItem>
				<ToggleGroupItem
					value='underline'
					aria-label='Toggle underline'
					onClick={() =>
						editor.chain().focus().toggleUnderline().run()
					}
				>
					<UnderlineIcon />
				</ToggleGroupItem>
				<ToggleGroupItem
					value='strike'
					aria-label='Toggle strike'
					onClick={() => editor.chain().focus().toggleStrike().run()}
				>
					<StrikethroughIcon />
				</ToggleGroupItem>
			</ToggleGroup>
		</div>
	)
}
