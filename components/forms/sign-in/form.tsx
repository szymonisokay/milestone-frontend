'use client'

import { Loader } from 'lucide-react'
import { useForm } from 'react-hook-form'

import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useSignIn } from '@/hooks/auth/use-sign-in'

import { HttpError } from '@/utils/error'
import { toast } from 'sonner'
import { Schema, defaultValues } from './schema'

export const SignInForm = () => {
	const { onSignIn, isPending, isSuccess } = useSignIn()
	const form = useForm<Schema>({
		defaultValues,
	})

	const onSubmit = (data: Schema) => {
		toast.promise(onSignIn(data), {
			loading: 'Signing in',
			success: 'Successfully signed in. Redirecting to dashboard...',
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
					name='rememberMe'
					render={({ field }) => (
						<FormItem className='flex items-center space-y-0 space-x-2'>
							<FormControl>
								<Checkbox
									checked={field.value}
									onCheckedChange={field.onChange}
								/>
							</FormControl>
							<FormLabel>Remember me?</FormLabel>
						</FormItem>
					)}
				/>

				<Button disabled={isPending || isSuccess}>
					{isPending && <Loader className='animate-spin' />}
					Sign In
				</Button>
			</form>
		</Form>
	)
}
