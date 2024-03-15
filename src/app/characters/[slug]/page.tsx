import { getCharacter, getPlanet, getStarship } from '@/lib/fetch'
import { Character } from '@/types'
import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'

interface PageProps {
	params: { slug: string }
}

export const generateMetadata = async (props: PageProps): Promise<Metadata> => {
	const { params } = props
	const character: Character = await getCharacter(params.slug)

	return {
		title: character.name
	}
}

export default async function Page(props: PageProps) {
	const { params } = props

	const character: Character = await getCharacter(params.slug)
	const planet = await getPlanet(character.homeworld)
	let starship = null
	if (character.starships.length) {
		starship = await getStarship(character.starships[0])
	}

	const gender: Record<string, string> = {
		female: 'she',
		male: 'he',
		'n/a': 'they'
	}

	if (!character) return notFound()

	return (
		<main className="flex flex-col items-center justify-center p-24">
			<section className="max-w-screen-md">
				<h1 className="text-6xl text-amber-300 mb-12">{character.name}</h1>

				<p className="mb-6">
					{character.name} is {character.height}cm tall, weighs {character.mass}
					kg and is of the gender {character.gender}.
				</p>

				<p className="mb-6">
					{gender[character.gender]?.charAt(0).toUpperCase() +
						gender[character.gender]?.toString().slice(1) || 'They'}{' '}
					was born in the year of {character.birth_year} on {planet.name}, a
					planet with a population of {planet.population} inhabitants and known
					for its {planet.climate} climate.
				</p>

				{starship && (
					<p className="mb-6">
						Most likely, you will se {character.name} cruising around in{' '}
						{starship.name} - a {starship.length}m long {starship.model}.
					</p>
				)}

				<Link
					className="block mt-12 text-indigo-50 hover:text-indigo-300 transition-colors"
					href="/characters"
				>
					&larr; Back to more characters
				</Link>
			</section>
		</main>
	)
}
