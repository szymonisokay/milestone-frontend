import { useForm } from 'react-hook-form'

import { Alert } from '@/components/primitives/alert'
import { FormElement } from '@/components/primitives/form-element'
import { Button } from '@/components/ui/button'
import { Form } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { useAddProject } from '@/hooks/projects/use-add-project'
import { HttpError } from '@/utils/error'
import { zodResolver } from '@hookform/resolvers/zod'
import { toast } from 'sonner'
import { defaultValues, Schema, schema } from './schema'

export const AddProjectForm = () => {
	const { onAddProject, isPending } = useAddProject()
	const form = useForm<Schema>({
		resolver: zodResolver(schema),
		defaultValues,
	})

	const onSubmit = (data: Schema) => {
		toast.promise(onAddProject(data), {
			loading: 'Creating project...',
			success: (data) => `Project ${data.name} created successfully!`,
			error: (error: HttpError) => error.message,
		})
	}

	return (
		<Form {...form}>
			<form
				className='flex flex-col space-y-4'
				onSubmit={form.handleSubmit(onSubmit)}
			>
				<div className='flex space-x-4'>
					<FormElement
						control={form.control}
						name='name'
						label='Name'
						render={({ field }) => <Input {...field} />}
						components={{
							item: {
								className: 'w-full',
							},
						}}
					/>
					<FormElement
						control={form.control}
						name='symbol'
						label='Symbol'
						render={({ field }) => <Input {...field} />}
					/>
				</div>

				<Alert
					variant='info'
					description="Project symbol is the identifier of the project and of all it's tasks. Symbol cannot be changed after project creation."
				/>

				<FormElement
					control={form.control}
					name='description'
					label='Description'
					render={({ field }) => <Textarea {...field} rows={2} />}
				/>

				<Button type='submit' disabled={isPending}>
					Create project
				</Button>
			</form>
		</Form>
	)
}
