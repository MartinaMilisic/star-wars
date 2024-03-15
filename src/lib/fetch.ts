import { Character, Film, Planet, Starship } from '@/types'

export const getFilms = async () => {
	const films: Film[] = await fetch('https://swapi.info/api/films')
		.then(res => res.json())
		.catch(error => `Sorry, we could not fetch any films :( Error: ${error}`)

	return films.map(({ title, episode_id, characters, director, producer }) => ({
		title,
		episode_id,
		characters,
		director,
		producer
	}))
}

export const getFilm = async (id: string) => {
	const {
		title,
		episode_id,
		characters,
		director,
		producer,
		opening_crawl
	}: Film = await fetch(`https://swapi.info/api/films/${id}`)
		.then(res => res.json())
		.catch(
			error =>
				`Sorry, we could not fetch the film you were looking for :( Error: ${error}`
		)

	return {
		title,
		episode_id,
		characters,
		director,
		producer,
		opening_crawl
	}
}

export const getCharacter = async (id: string) => {
	const {
		name,
		gender,
		birth_year,
		mass,
		height,
		url,
		homeworld,
		starships
	}: Character = await fetch(`https://swapi.info/api/people/${id}`)
		.then(res => res.json())
		.catch(
			error =>
				`Sorry, we could not fetch the character you were looking for :( Error: ${error}`
		)

	return { name, gender, birth_year, mass, height, url, homeworld, starships }
}

export const getCharacters = async (urls: string[]) => {
	const characters: Character[] = await Promise.all(
		urls.map(url =>
			fetch(url)
				.then(res => res.json())
				.catch(
					error => `Sorry, we could not fetch any characters :( Error: ${error}`
				)
		)
	)

	return characters.map(
		({
			name,
			gender,
			birth_year,
			mass,
			height,
			url,
			homeworld,
			starships
		}) => ({
			name,
			gender,
			birth_year,
			mass,
			height,
			url,
			homeworld,
			starships
		})
	)
}

export const getPlanet = async (url: string) => {
	const { name, population, climate }: Planet = await fetch(url)
		.then(res => res.json())
		.catch(
			error =>
				`Sorry, we could not fetch the home world for this character :( Error: ${error}`
		)

	return { name, population, climate }
}

export const getStarship = async (url: string) => {
	const { name, model, length }: Starship = await fetch(url)
		.then(res => res.json())
		.catch(
			error =>
				`Sorry, we could not fetch a starship for this character :( Error: ${error}`
		)
	return { name, model, length }
}
