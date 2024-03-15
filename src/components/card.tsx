type CardProps = React.ComponentProps<'li'>

export const Card: React.FC<CardProps> = ({ children, onClick }) => {
	return (
		<li
			onClick={onClick}
			className="group border-2 border-indigo-200 border-r-amber-200 border-l-amber-200 rounded-xl hover:cursor-pointer"
		>
			{children}
		</li>
	)
}
