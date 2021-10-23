import PropTypes from 'prop-types'
import PostBoxHeader from './PostBoxHeader'
import csKitty from '../images/csKitty.jpeg'


const PostBox = ({title, imageSrc, content}) => {
	return (
		<div className = 'task'>
			<PostBoxHeader userName = 'willis' courseName = 'CalIII' time = '10/23/2021'/>
			<h1>{title}</h1>
			<img src = {csKitty} ></img>
			<p>{content}</p>
		</div>
	)
}

export default PostBox
