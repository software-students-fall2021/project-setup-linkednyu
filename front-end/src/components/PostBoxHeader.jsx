import React from 'react'
import kitty from '../images/kitty.jpg'

const PostBoxHeader = ({avatar, userName, courseName, time}) => {
	return (
		<div className = "header">
			<img src = {kitty} width = '100px' height = '100px'></img>
			<h2>{userName}</h2>
			<h2>{courseName}</h2>
			<h2>{time}</h2>
		</div>
	)
}

export default PostBoxHeader
