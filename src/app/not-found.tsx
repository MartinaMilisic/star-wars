import Link from 'next/link'

export default function NotFound() {
	return (
		<main className="min-h-full flex flex-col items-center justify-center flex-1 mx-8 my-24">
			<h1>We could not find what you were looking for.</h1>

			<Link href="/">Please take me home!</Link>
		</main>
	)
}
