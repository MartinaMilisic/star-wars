'use client'

import { Film } from '@/types'
import Link from 'next/link'
import { useContext } from 'react'
import { AppContext } from './app-provider'
import { Card } from './card'

type FilmItemProps = {
	film: Film
	id: number
}

export const FilmItem: React.FC<FilmItemProps> = ({ film, id }) => {
	const { characters, setCharacters } = useContext(AppContext)

	const handleSetCharacters = () => {
		const newSet = new Set(characters)
		film.characters.forEach(film => {
			if (!characters.has(film)) {
				newSet.add(film)
				setCharacters(newSet)
			}
		})
	}

	return (
		<Card onClick={handleSetCharacters}>
			<Link href={`/films/${id}`} className="block px-8 py-12">
				<h2 className="transition-all group-hover:text-indigo-300 text-xl pb-1">
					Star Wars Episode: {film.episode_id}
				</h2>
				<p className="transition-all group-hover:text-amber-300 text-3xl pb-8 font-bold">
					{film.title}
				</p>
				<p className="text-xs group-hover:text-indigo-300  mb-1">
					Director/s: {film.director}
				</p>
				<p className="text-xs group-hover:text-indigo-300 mb-1">
					Producer/s: {film.producer}
				</p>
				<p className="text-xs group-hover:text-indigo-300">
					Number of starring characters: {film.characters.length}
				</p>
			</Link>
		</Card>
	)
}
