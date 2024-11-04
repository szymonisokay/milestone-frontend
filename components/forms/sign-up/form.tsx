'use client'

import { Loader } from 'lucide-react'
import { useForm } from 'react-hook-form'

import { Button } from '@/components/ui/button'
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'

import { useSignUp } from '@/hooks/auth/use-sign-up'
import { HttpError } from '@/utils/error'
import { toast } from 'sonner'
import { Schema, defaultValues } from './schema'

export const SignUpForm = () => {
	const { onSignUp, isPending, isSuccess } = useSignUp()
	const form = useForm<Schema>({
		defaultValues,
	})

	const onSubmit = (data: Schema) => {
		toast.promise(onSignUp(data), {
			loading: 'Creating account...',
			success:
				'Account created successfully. You can now sign in to your account.',
			error: (error: HttpError) => error.message,
		})
	}

	return (
		<Form {...form}>
			<form
				className='flex flex-col gap-4 w-full'
				onSubmit={form.handleSubmit(onSubmit)}
			>
				<FormField
					control={form.control}
					name='email'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Email</FormLabel>
							<FormControl>
								<Input {...field} placeholder='Email' />
							</FormControl>
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name='password'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Password</FormLabel>
							<FormControl>
								<Input
									{...field}
									type='password'
									placeholder='Password'
								/>
							</FormControl>
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name='confirmPassword'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Confirm password</FormLabel>
							<FormControl>
								<Input
									{...field}
									type='password'
									placeholder='Confirm password'
								/>
							</FormControl>
						</FormItem>
					)}
				/>

				<Button disabled={isPending || isSuccess}>
					{isPending && <Loader className='animate-spin' />}
					Sign Up
				</Button>
			</form>
		</Form>
	)
}
