import z from 'zod'

export const schema = z.object({
	firstName: z.string().min(3, { message: 'First name is required' }).trim(),
	lastName: z.string().min(3, { message: 'Last name is required' }).trim(),
})

export type Schema = z.infer<typeof schema>

export const defaultValues: Schema = {
	firstName: '',
	lastName: '',
}
