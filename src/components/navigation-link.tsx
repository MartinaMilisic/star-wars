'use client'

import Link, { LinkProps } from 'next/link'
import { usePathname } from 'next/navigation'
import { ReactNode, useContext } from 'react'
import { AppContext } from './app-provider'

type NavigationLinkProps = LinkProps & { children: ReactNode }

export const NavigationLink: React.FC<NavigationLinkProps> = ({
	href,
	children
}) => {
	const { characters } = useContext(AppContext)

	const currentPath = usePathname()
	const isActivePath = (path: string) => {
		if (path === '/' && currentPath !== path) {
			return false
		}
		return currentPath.startsWith(path)
	}

	return (
		<Link
			href={href}
			className={`text-lg transition-all hover:text-indigo-300 ${
				isActivePath(href as string) ? 'text-indigo-300' : 'text-indigo-50'
			}`}
		>
			{children}{' '}
			{href === '/characters' && `(${Array.from(characters).length})`}
		</Link>
	)
}
