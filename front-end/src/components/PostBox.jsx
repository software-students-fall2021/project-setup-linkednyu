import './PostBox.css'
import ImageAvatars from './Avatar'


const PostBox = ({ posts }) => {
	return (
		<div className="container">
			<div className = 'task'>
				<div className = "header">
					<ImageAvatars size = '45px'/>
					<h3>{posts.userName}</h3>
					<h3>{posts.courseName}</h3>
					<h3>{posts.time}</h3>
				</div>
				<h1>{posts.title}</h1>
				<img src = {posts.imageSrc} alt="" width = '200px' height = '200px' ></img>
				<p>{posts.text}</p>
			</div>
			
		</div>
		
	)
}

export default PostBox