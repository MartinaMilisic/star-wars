export type Film = {
	title: string
	episode_id: number
	characters: string[]
	director: string
	producer: string
	opening_crawl?: string
}

export type Character = {
	name: string
	gender: string
	birth_year: string
	mass: string
	height: string
	url: string
	homeworld: string
	starships: string[]
}

export type Planet = {
	name: string
	population: string
	climate: string
}

export type Starship = {
	name: string
	model: string
	length: string
}
