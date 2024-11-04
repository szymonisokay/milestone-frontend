export const setAuthCookie = (token: string) => {
	document.cookie = `APP_AUTH=${token}; path=/;`
}

export const getAuthCookie = () => {
	const cookie = document.cookie
		.split(';')
		.find((c) => c.trim().startsWith('APP_AUTH='))
		?.split('=')[1]

	return cookie
}
