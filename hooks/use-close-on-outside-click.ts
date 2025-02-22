import { useEffect, useRef } from 'react'

export const useCloseOnOutsideClick = <T extends HTMLElement>(
	callback: () => void
) => {
	const elementRef = useRef<T | null>(null)

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				elementRef.current &&
				!elementRef.current.contains(event.target as Node)
			) {
				callback()
				elementRef.current = null
			}
		}

		document.addEventListener('mousedown', handleClickOutside)

		return () =>
			document.removeEventListener('mousedown', handleClickOutside)
	}, [callback])

	return { ref: elementRef }
}
