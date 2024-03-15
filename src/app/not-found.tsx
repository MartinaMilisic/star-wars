import Link from 'next/link'

export default function NotFound() {
	return (
		<main className="flex min-h-screen flex-col items-center p-24">
			<h1>We could not find what you were looking for.</h1>

			<Link href="/">Please take me home!</Link>
		</main>
	)
}
