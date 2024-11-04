export type SignInData = {
	email: string
	password: string
	rememberMe?: boolean
}

export type SignInDataResponse = string

export type SignUpData = Omit<SignInData, 'rememberMe'>
