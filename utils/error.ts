import { AxiosError } from 'axios'

export class HttpError extends Error {
	constructor(error: unknown) {
		const message =
			error instanceof AxiosError ? error.response?.data.message : error

		super(message ?? 'Internal server error')
	}
}
