import { CharacterList } from '@/components/characters-list'
import { Metadata } from 'next'
import { Suspense } from 'react'

export const metadata: Metadata = {
	title: 'Characters'
}

export default function Page() {
	return (
		<main className="flex flex-col flex-1 items-center justify-center p-24">
			<Suspense fallback={<>Loading characters...</>}>
				<CharacterList />
			</Suspense>
		</main>
	)
}
