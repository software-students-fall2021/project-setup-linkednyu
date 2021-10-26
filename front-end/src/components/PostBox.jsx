import './PostBox.css'
import ImageAvatars from './Avatar'


const PostBox = ({title,userName,courseName,time,imageSrc, content}) => {
	return (
		<div className="container">
			<div className = 'task'>
				<div className = "header">
					<ImageAvatars className="imgAvatar" size="30px" />
					<h3 className="userName">{userName}</h3>
					<h3 className="courseName">{courseName}</h3>
					<h3 className="time">{time}</h3>
				</div>
				<hr/>
				<div className="content">
					<h3 className="title">{title}</h3>
					<img className="contentImg" src = {imageSrc} alt="" ></img>
					<p>{content}</p>
				</div>
				
			</div>
			
		</div>
		
	)
}

export default PostBox