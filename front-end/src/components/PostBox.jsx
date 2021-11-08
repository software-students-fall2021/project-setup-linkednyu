import './PostBox.css'
import ImageAvatars from './Avatar'
import { Link } from 'react-router-dom'
import parse from 'html-react-parser'


const PostBox = ({ post, loggedIn }) => {
	return (
		<div className="container">
			<div className='task'>
				<div className="header">
					<ImageAvatars className="imgAvatar" size="30px" avatarSrc={post.avatar} />
					<h3 className="userName"><Link className="tLink" to={loggedIn ? "/account" : ""}>{post.userName}</Link></h3>
					<h3 className="courseName"><Link className="tLink" to={loggedIn ? "/joinclass" : ""}>{post.courseName}</Link></h3>
					<h3 className="time">{post.date}</h3>
				</div>
				<hr />
				<Link className="tLink" to={`/detailedposts/${post.id}`}><div className="content">
					<h3 className="contenttitle">{post.title}</h3>
					<img className="contentImg" src={post.imgSrc} alt="" ></img>
					<div className="textContent">{parse(post.text)}</div>
				</div></Link>
			</div>
		</div>

	)
}

export default PostBox