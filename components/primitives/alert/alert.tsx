import { AlertProps, variants } from '@/components/primitives/alert/types'
import {
	AlertDescription,
	AlertTitle,
	Alert as AlertWrapper,
} from '@/components/ui/alert'
import { cn } from '@/lib/utils'

export const Alert = ({
	title,
	description,
	variant = 'info',
	components,
}: AlertProps) => {
	const {
		Icon,
		wrapper: wrapperProps,
		title: titleProps,
		icon: iconProps,
		description: descriptionProps,
	} = variants[variant]

	return (
		<AlertWrapper
			{...components?.wrapper}
			className={cn(
				wrapperProps?.className,
				components?.wrapper?.className
			)}
		>
			<Icon
				{...components?.icon}
				className={cn(
					iconProps?.className,
					components?.icon?.className
				)}
			/>
			{title && (
				<AlertTitle
					{...components?.title}
					className={cn(
						titleProps?.className,
						components?.title?.className
					)}
				>
					{title}
				</AlertTitle>
			)}
			{description && (
				<AlertDescription
					{...components?.description}
					className={cn(
						descriptionProps?.className,
						components?.description?.className
					)}
				>
					{description}
				</AlertDescription>
			)}
		</AlertWrapper>
	)
}
