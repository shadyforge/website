import '~/styles/globals.css'

import { Inter } from 'next/font/google'
import { cookies } from 'next/headers'
import { Analytics } from '@vercel/analytics/react'

import { TRPCReactProvider } from '~/trpc/react'

const inter = Inter({
	subsets: ['latin'],
	variable: '--font-sans'
})

export const metadata = {
	title: 'shadyforge',
	description: 'build in shade',
	icons: [{ rel: 'icon', url: '/stone.png' }]
}

export default function RootLayout({
	children
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en'>
			<body className={`font-sans ${inter.variable}`}>
				<TRPCReactProvider cookies={cookies().toString()}>
					{children}
				</TRPCReactProvider>
				<Analytics debug={false} />
			</body>
		</html>
	)
}
