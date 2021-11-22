import './PostBox.css'
import ImageAvatars from './Avatar'
import { Link } from 'react-router-dom'
// import moment from 'moment'


const PostBox = ({ post, loggedIn }) => {

	let newDate = new Date(post.date)
	let mDate = newDate.toISOString().slice(0,10)
	return (
		<div className="container">
			<div className='task'>
				<div className="header">
					<ImageAvatars className="imgAvatar" size="30px" id={post.username} avatarSrc={post.avatar} />
					<h3 className="userName">{post.username}</h3>
					<h3 className="courseName"><Link className="tLink" to={loggedIn ? "/joinclass" : ""}>{post.coursename}</Link></h3>
					<h3 className="time">{mDate}</h3>
				</div>
				<hr />
				<Link className="tLink" to={`/detailedposts/${post._id}`}><div className="content">
					<h3 className="contenttitle">{post.title}</h3>
					{post.imgSrc === '' ? '' : <img className="contentImg" src={post.imgSrc} alt="" ></img>}
					<div className="textContent">
						{post.content}
					</div>
				</div></Link>
			</div>
		</div>
	)
}

export default PostBox