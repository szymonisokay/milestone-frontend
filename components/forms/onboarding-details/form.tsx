'use client'

import { useForm } from 'react-hook-form'

import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'

import { Schema, defaultValues } from './schema'

export const OnboardingDetailsForm = () => {
	const form = useForm<Schema>({
		defaultValues,
	})

	const onSubmit = (data: Schema) => {
		console.log(data)
	}

	return (
		<Form {...form}>
			<form
				className='flex space-y-0 space-x-4'
				onSubmit={form.handleSubmit(onSubmit)}
			>
				<FormField
					control={form.control}
					name='firstName'
					render={({ field }) => (
						<FormItem>
							<FormLabel>First Name</FormLabel>
							<FormControl>
								<Input {...field} />
							</FormControl>
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name='lastName'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Last Name</FormLabel>
							<FormControl>
								<Input {...field} />
							</FormControl>
						</FormItem>
					)}
				/>
			</form>
		</Form>
	)
}
