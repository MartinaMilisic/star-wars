import { getFilms } from '@/lib/fetch'
import { Film } from '@/types'
import { FilmItem } from './film-item'

export const FilmList: React.FC = async () => {
	const data: Film[] = await getFilms()

	return (
		<ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-screen-xl">
			{data.map((film, index) => (
				<FilmItem key={film.episode_id} film={film} id={index + 1} />
			))}
		</ul>
	)
}
