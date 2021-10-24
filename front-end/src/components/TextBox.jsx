/* Props:
        label
        icon
        style
*/

const TextBox = (props) => {
	return (
		<div>
			<div>
				<img className = "icon" 
						src = {props.icon}
						alt = {props.alt}/>
				<textarea className = "TextBox"
							color = "green"
							alt = {props.alt}
							style = {props.style} >
					{props.label}
				</textarea>
			</div>
		</div>
	)
}

export default TextBox
