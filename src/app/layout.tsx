import AppProvider from '@/components/app-provider'
import { Navigation } from '@/components/navigation'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: {
		template: '%s | Star Wars Films',
		default: 'Star Wars Films'
	},
	description: 'The most awesome list of Star Wars films'
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body
				className={`flex min-h-screen flex-col bg-indigo-950  font-mono ${inter.className}`}
			>
				<AppProvider>
					<header>
						<Navigation />
					</header>
					{children}
				</AppProvider>
			</body>
		</html>
	)
}
