import { getFilm, getFilms } from '@/lib/fetch'
import { Film } from '@/types'
import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'

type PageProps = {
	params: { slug: string }
}

export const generateMetadata = async (props: PageProps): Promise<Metadata> => {
	const { params } = props
	const film: Film = await getFilm(params.slug)

	return {
		title: film.title
	}
}

export async function generateStaticParams() {
	const films = await getFilms()

	return films?.map((_, index) => ({
		params: { slug: `/${index}` }
	}))
}

export default async function Page(props: PageProps) {
	const { params } = props

	const film: Film = await getFilm(params.slug)

	if (!film) return notFound()

	return (
		<main className="flex flex-col items-center mx-8 my-24">
			<section className="max-w-screen-md">
				<h1 className="text-2xl text-indigo-300 mb-2">
					Star Wars Episode: {film.episode_id}
				</h1>

				<h2 className="text-6xl text-amber-300 mb-12">{film.title}</h2>

				<p className="text-xs text-indigo-300 mb-1">
					Director/s: {film.director}
				</p>

				<p className="text-xs text-indigo-300 mb-1">
					Producer/s: {film.producer}
				</p>

				<p className="text-xs text-indigo-300 mb-6">
					Number of starring characters: {film.characters.length}
				</p>

				<p>{film.opening_crawl}</p>

				<Link
					className="block mt-12 text-indigo-50 hover:text-indigo-300 transition-colors"
					href="/films"
				>
					&larr; Back to more films
				</Link>
			</section>
		</main>
	)
}
