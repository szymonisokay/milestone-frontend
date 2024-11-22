'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

import { Loader } from '@/components/loaders/loader'
import { FormElement } from '@/components/primitives/form-element'
import { Button } from '@/components/ui/button'
import { Form } from '@/components/ui/form'
import { Input } from '@/components/ui/input'

import { Alert } from '@/components/primitives/alert'
import { useOnboardingWorkspace } from '@/hooks/onboarding/use-onboarding-workspace'
import { defaultValues, schema, Schema } from './schema'

export const OnboardingWorkspaceForm = () => {
	const { onCreateWorkspace, isPending } = useOnboardingWorkspace()
	const form = useForm<Schema>({
		resolver: zodResolver(schema),
		mode: 'onBlur',
		defaultValues,
	})

	const onSubmit = (data: Schema) => {
		toast.promise(onCreateWorkspace(data), {
			loading: 'Creating workspace...',
			success: 'Workspace created successfully!',
			error: 'Failed to create workspace',
		})
	}

	return (
		<Form {...form}>
			<form
				className='flex flex-col space-y-5'
				onSubmit={form.handleSubmit(onSubmit)}
			>
				<FormElement
					control={form.control}
					name='name'
					label='Workspace name'
					render={({ field }) => (
						<Input {...field} placeholder='E.g. My workspace' />
					)}
				/>

				<Alert
					variant='info'
					description='Workspaces work as a main places where all members work together on projects and tasks'
				/>

				<Button disabled={isPending} className='mt-6'>
					{isPending && <Loader className='mr-2 animate-spin' />}
					Create workspace
				</Button>
			</form>
		</Form>
	)
}
