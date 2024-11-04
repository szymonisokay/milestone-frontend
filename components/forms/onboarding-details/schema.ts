import z from 'zod'

const schema = z.object({
	firstName: z
		.string()
		.min(1, { message: 'Please enter your first name' })
		.trim(),
	lastName: z
		.string()
		.min(1, { message: 'Please enter your last name' })
		.trim(),
})

export type Schema = z.infer<typeof schema>

export const defaultValues: Schema = {
	firstName: '',
	lastName: '',
}
