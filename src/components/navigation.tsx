import { NavigationLink } from './navigation-link'

export const Navigation: React.FC = () => {
	return (
		<nav>
			<ul className="px-8 py-6 flex gap-6">
				<li>
					<NavigationLink href="/films">Films</NavigationLink>
				</li>
				<li>
					<NavigationLink href="/characters">Characters</NavigationLink>
				</li>
			</ul>
		</nav>
	)
}
