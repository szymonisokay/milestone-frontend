'use client'

import { useRouter } from 'next/navigation'

import { Project } from '@/types/projects'
import { headers, mapProjectsRow } from '@/utils/projects'
import { MouseEvent } from 'react'

export const useProjectsTable = () => {
	const router = useRouter()

	const onRowClick = (row: Project) => {
		router.push(`/projects/${row.symbol}`)
	}

	const onActionClick = (event: MouseEvent, row: Project) => {
		event.stopPropagation()
		console.log(row)
	}

	const renderRow = (row: Project) =>
		mapProjectsRow({
			row,
			onRowClick,
			onActionClick,
		})

	return {
		headers,
		renderRow,
	}
}
