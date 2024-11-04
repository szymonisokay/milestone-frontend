import { PropsWithChildren } from 'react'

import { SessionProvider } from '@/providers/session.provider'

const OnboardingLayout = ({ children }: PropsWithChildren) => (
	<SessionProvider>{children}</SessionProvider>
)

export default OnboardingLayout
