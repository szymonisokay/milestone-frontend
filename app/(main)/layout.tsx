'use client'

import { SessionProvider } from '@/providers/session.provider'
import { PropsWithChildren } from 'react'

const MainLayout = ({ children }: PropsWithChildren) => (
	<SessionProvider>{children}</SessionProvider>
)

export default MainLayout
