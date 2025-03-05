import { Text } from '@/components/primitives/text'

type Props = {
	label?: string
}

export const Header = ({ label }: Props) => (
	<div className='mb-1'>{label && <Text>{label}</Text>}</div>
)
