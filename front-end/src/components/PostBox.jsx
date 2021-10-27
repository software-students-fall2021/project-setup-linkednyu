import './PostBox.css'
import ImageAvatars from './Avatar'


const PostBox = ({ post }) => {
	return (
		<div className="container">
			<div className = 'task'>
				<div className = "header">
					<ImageAvatars className="imgAvatar" size="30px" />
					<h3 className="userName">{post.userName}</h3>
					<h3 className="courseName">{post.courseName}</h3>
					<h3 className="time">{post.time}</h3>
				</div>
				<hr/>
				<div className="content">
					<h3 className="contenttitle">{post.title}</h3>
					<img className="contentImg" src = {post.imageSrc} alt="" ></img>
					<p>{post.text}</p>
				</div>
				
			</div>
			
		</div>
		
	)
}

export default PostBox