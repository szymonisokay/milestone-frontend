import { InfoIcon } from 'lucide-react'
import { ComponentProps, ReactElement } from 'react'
import {
	Control,
	ControllerFieldState,
	ControllerRenderProps,
	FieldPath,
	FieldValues,
	UseFormStateReturn,
} from 'react-hook-form'

import {
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form'
import { cn } from '@/lib/utils'

type Components = {
	item?: ComponentProps<typeof FormItem>
	label?: ComponentProps<typeof FormLabel>
	description?: ComponentProps<typeof FormDescription>
}

type Props<
	TFieldValues extends FieldValues = FieldValues,
	TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> = {
	control: Control<TFieldValues>
	name: TName
	label?: string | ReactElement
	description?: string | ReactElement
	components?: Components
	render: ({
		field,
		fieldState,
		formState,
	}: {
		field: ControllerRenderProps<TFieldValues, TName>
		fieldState: ControllerFieldState
		formState: UseFormStateReturn<TFieldValues>
	}) => ReactElement
}

export const FormElement = <
	TFieldValues extends FieldValues = FieldValues,
	TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>({
	control,
	name,
	label,
	description,
	components,
	render,
}: Props<TFieldValues, TName>) => (
	<FormField
		control={control}
		name={name}
		render={(state) => (
			<FormItem
				{...components?.item}
				className={cn('space-y-1', components?.item?.className)}
			>
				{label && <FormLabel {...components?.label}>{label}</FormLabel>}
				<FormControl>{render(state)}</FormControl>
				{description && (
					<FormDescription
						{...components?.description}
						className={cn(
							'flex text-slate-500 !mt-2',
							components?.description?.className
						)}
					>
						<InfoIcon className='w-[14px] h-[14px] mr-[6px] shrink-0' />
						<span className='text-[12px] leading-tight'>
							{description}
						</span>
					</FormDescription>
				)}
				<FormMessage />
			</FormItem>
		)}
	/>
)
