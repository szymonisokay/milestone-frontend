import { useEffect, useRef } from 'react'

export const useCloseOnOutsideClick = <T extends HTMLElement>(
	callback: () => void,
	elementsToExclude: string[] = []
) => {
	const elementRef = useRef<T | null>(null)

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			const elements = [
				...elementsToExclude
					.map((selector) =>
						[...document.querySelectorAll(selector)].flat()
					)
					.flat(),
			]

			if (
				elementRef.current &&
				!elementRef.current.contains(event.target as Node) &&
				!elements.some((element) =>
					element.contains(event.target as Node)
				)
			) {
				callback()
			}
		}

		document.addEventListener('mousedown', handleClickOutside)

		return () =>
			document.removeEventListener('mousedown', handleClickOutside)
	}, [callback, elementsToExclude])

	return { ref: elementRef }
}
