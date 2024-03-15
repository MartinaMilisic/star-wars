import { FilmList } from '@/components/film-list'
import { Metadata } from 'next'
import { Suspense } from 'react'

export const metadata: Metadata = {
	title: 'Films'
}

export default function Page() {
	return (
		<main className="min-h-full flex flex-col items-center justify-center flex-1 mx-8 my-24">
			<Suspense fallback={<p>Loading Films, please be patient...</p>}>
				<FilmList />
			</Suspense>
		</main>
	)
}
