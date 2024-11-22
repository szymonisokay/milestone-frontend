'use client'

import { Sidebar } from '@/components/complex/sidebar/sidebar'
import { ModalsProvider } from '@/providers/modals.provider'
import { SessionProvider } from '@/providers/session.provider'
import { PropsWithChildren } from 'react'

const MainLayout = ({ children }: PropsWithChildren) => (
	<SessionProvider>
		<div className='flex h-[100dvh] bg-[#fcfcfc]'>
			<Sidebar />
			<main className='flex-1 bg-white'>{children}</main>
		</div>
		<ModalsProvider />
	</SessionProvider>
)

export default MainLayout
