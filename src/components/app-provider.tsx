'use client'

import { createContext, useState } from 'react'

type AppContextProps = {
	characters: Set<string>
	setCharacters: React.Dispatch<React.SetStateAction<Set<string>>>
}

export const AppContext = createContext<AppContextProps>({
	characters: new Set(),
	setCharacters: () => {}
})

export default function AppProvider({
	children
}: {
	children: React.ReactNode
}) {
	const [characters, setCharacters] = useState<Set<string>>(new Set())

	return (
		<AppContext.Provider value={{ characters, setCharacters }}>
			{children}
		</AppContext.Provider>
	)
}
