'use client'

import { useEffect } from 'react'

export default function Error({
	error,
	reset
}: {
	error: Error & { digest?: string }
	reset: () => void
}) {
	useEffect(() => {
		console.error(error)
	}, [error])

	return (
		<main className="min-h-full flex flex-col items-center justify-center flex-1 mx-8 my-24">
			<h2>Oh no! Something is very wrong.</h2>
			<button onClick={() => reset()}>Please try to reload the page</button>
		</main>
	)
}
