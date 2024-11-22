'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

import { Loader } from '@/components/loaders/loader'
import { FormElement } from '@/components/primitives/form-element'
import { Button } from '@/components/ui/button'
import { Form } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useOnboardingDetails } from '@/hooks/onboarding/use-onboarding-details'

import { Alert } from '@/components/primitives/alert'
import { defaultValues, schema, Schema } from './schema'

export const OnboardingDetailsForm = () => {
	const { onUpdateDetails, isPending } = useOnboardingDetails()
	const form = useForm<Schema>({
		resolver: zodResolver(schema),
		mode: 'onBlur',
		defaultValues,
	})

	const onSubmit = (data: Schema) => {
		toast.promise(onUpdateDetails(data), {
			loading: 'Updating personal details...',
			success: 'Personal details updated successfully!',
			error: 'Failed to update personal details',
		})
	}

	return (
		<Form {...form}>
			<form
				className='flex flex-col space-y-5'
				onSubmit={form.handleSubmit(onSubmit)}
			>
				<div className='flex space-x-4 space-y-0'>
					<FormElement
						control={form.control}
						name='firstName'
						label='First name'
						render={({ field }) => <Input {...field} />}
					/>

					<FormElement
						control={form.control}
						name='lastName'
						label='Last name'
						render={({ field }) => <Input {...field} />}
					/>
				</div>

				<Alert
					variant='info'
					description='By updating your personal details, you help your
						workspace members to recognize you more easily.'
				/>

				<Button disabled={isPending} className='mt-6'>
					{isPending && <Loader className='mr-2 animate-spin' />}
					Update personal details
				</Button>
			</form>
		</Form>
	)
}
