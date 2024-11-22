import z from 'zod'

export const schema = z.object({
	name: z.string().min(3, { message: 'Name is required' }).trim(),
})

export type Schema = z.infer<typeof schema>

export const defaultValues: Schema = {
	name: '',
}
