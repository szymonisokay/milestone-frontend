export const getInitials = (firstName: string, lastName: string): string => {
	if (!firstName || !lastName) return ''

	const firstLetter = firstName.charAt(0).toUpperCase()
	const lastLetter = lastName.charAt(0).toUpperCase()

	return `${firstLetter}${lastLetter}`
}
