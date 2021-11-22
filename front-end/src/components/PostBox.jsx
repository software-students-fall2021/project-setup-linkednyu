import './PostBox.css'
import ImageAvatars from './Avatar'
import { Link } from 'react-router-dom'
import parser from 'html-react-parser'
import moment from 'moment'


const PostBox = ({ post, loggedIn }) => {
	const date = moment(post.date).format("MMM DD, YYYY") //date format convert
	return (
		<div className="container">
			<div className='task'>
				<div className="header">
					<ImageAvatars className="imgAvatar" size="30px" id={post.userName} avatarSrc={post.avatar} />
					<h3 className="userName"><Link className="tLink" to={loggedIn ? "/account" : ""}>{post.userName}</Link></h3>
					<h3 className="courseName"><Link className="tLink" to={loggedIn ? "/joinclass" : ""}>{post.courseName}</Link></h3>
					<h3 className="time">{date}</h3>
				</div>
				<hr />
				<Link className="tLink" to={`/detailedposts/${post.id}`}><div className="content">
					<h3 className="contenttitle">{post.title}</h3>
					{post.imgSrc === '' ? '' : <img className="contentImg" src={post.imgSrc} alt="" ></img>}
					<div className="textContent">
						{parser(post.text + '')}
					</div>
				</div></Link>
			</div>
		</div>
	)
}

export default PostBox