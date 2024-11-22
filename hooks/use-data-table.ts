import { useLayoutEffect, useRef } from 'react'

export const useDataTable = (...deps: any) => {
	const headerRefs = useRef<HTMLDivElement[]>([])

	useLayoutEffect(() => {
		if (!deps) return

		headerRefs.current.forEach((headerCell, index) => {
			const headerWidth =
				headerCell.dataset.width ||
				headerCell.getBoundingClientRect().width

			const elements = [
				...document.querySelectorAll(
					`.table div[data-type="row"] div[data-position="${index}"]`
				),
			] as HTMLElement[]

			elements.forEach((valueCell) => {
				valueCell.style.width = `${headerWidth}px`
			})
		})
	}, [deps])

	return { headerRefs }
}
