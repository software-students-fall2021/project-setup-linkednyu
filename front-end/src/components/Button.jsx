import "./button.css"

const STYLES = [
	"btn--primary--solid",
	"btn--primary--outline",
	"btn--dark--solid",
	"btn--dark--outline",
]

const SIZES = [
	"btn--medium",
	"btn--small",
	"btn--large",
	"btn--large--fixed"
]

export const Button = ({
	//your text here
	children,
	type,
	//your onClick function here
	onClick,
	//style of button
	buttonStyle,
	//size of button
	buttonSize,
}) => {
	//check if value passed in is in STYLES
	const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]
	//check if value passed in is in SIZES
	const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]

	return (
		<button className={`btn ${checkButtonStyle} ${checkButtonSize}`} onClick={onClick} type={type}>
			{children}
		</button>
	)
}
