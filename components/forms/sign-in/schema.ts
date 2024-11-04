import z from 'zod'

export const schema = z.object({
	email: z
		.string()
		.min(1, { message: 'Please enter your email address' })
		.email({ message: 'Please enter a valid email address' }),
	password: z.string().min(1, { message: 'Please enter your password' }),
	rememberMe: z.boolean().optional(),
})

export type Schema = z.infer<typeof schema>

export const defaultValues: Schema = {
	email: '',
	password: '',
	rememberMe: false,
}
