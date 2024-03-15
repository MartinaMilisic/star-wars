'use client'

import { getCharacters } from '@/lib/fetch'
import { Character } from '@/types'
import Link from 'next/link'
import { useContext, useEffect, useState } from 'react'
import { AppContext } from './app-provider'
import { Card } from './card'

export const CharacterList: React.FC = () => {
	const { characters } = useContext(AppContext)
	const [apiData, setApiData] = useState<Character[] | undefined>([])

	useEffect(() => {
		;(async () => {
			const data: Character[] | undefined = await getCharacters(
				Array.from(characters)
			)
			setApiData(data)
		})()
	}, [characters])

	return (
		<>
			{!Array.from(characters).length ? (
				<div>
					<p>There are no characters to display yet.</p>
					<p>
						<Link
							className="transition-all text-indigo-300 hover:underline hover:underline-offset-4"
							href="/"
						>
							Click on a film
						</Link>{' '}
						to start exploring characters.
					</p>
				</div>
			) : (
				<ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-screen-xl">
					{apiData?.map(character => (
						<Card key={character.name}>
							<Link
								href={`/characters/${character.url.split('/').slice(-1)}`}
								className="block px-8 py-12"
							>
								<h2 className="transition-all group-hover:text-amber-300 text-3xl pb-8 font-bold">
									{character?.name}
								</h2>
								<p className="text-xs group-hover:text-indigo-300">
									Gender: {character.gender}
								</p>
								<p className="text-xs group-hover:text-indigo-300">
									Birth Year: {character.birth_year}
								</p>
							</Link>
						</Card>
					))}
				</ul>
			)}
		</>
	)
}
