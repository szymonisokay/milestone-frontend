import z from 'zod'

export const schema = z.object({
	name: z.string().min(3, { message: 'Name is required' }).trim(),
	symbol: z
		.string()
		.min(3, { message: 'Symbol is required' })
		.max(3, { message: 'Symbol must be 3 characters' })
		.trim(),
	description: z.string().optional(),
})

export type Schema = z.infer<typeof schema>

export const defaultValues: Schema = {
	name: '',
	symbol: '',
	description: '',
}
