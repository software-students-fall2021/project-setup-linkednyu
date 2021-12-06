import './PostBox.css'
import ImageAvatars from './Avatar'
import { Link } from 'react-router-dom'
import parser from 'html-react-parser'



const PostBox = ({ post, loggedIn }) => {

	let newDate = new Date(post.date)
	let mDate = newDate.toISOString().slice(0, 10)
	let newArray = post.content.split(" ")
	let newSentence = ""
	if (newArray.length > 25) {
		newSentence = parser(newArray.slice(0, 22).join(" ") + "...<span style='color:blue;'>Click to Read More</span>")
	}
	else {
		newSentence = parser(post.content)
	}
	return (
		<div className="container">
			<div className='task'>
				<div className="header">
					<ImageAvatars className="imgAvatar" size="36px" id={post.username} avatarSrc={post.avatar} />
					<h3 className="userName">{post.username}</h3>
					<h3 className="courseName"><Link className="tLink" to={loggedIn ? `/joinclass/${post.coursename}` : ""}>{post.coursename}</Link></h3>
					<h3 className="time">{mDate}</h3>
				</div>
				<hr />
				<Link className="tLink" to={loggedIn ?`/detailedposts/${post._id}`:"/login"}><div className="content">
					<h3 className="contenttitle">{post.title}</h3>
					<img className="contentImg" src={post.imgSrc} alt="" ></img>
					<div className="textContent">
						{newSentence}
					</div>
				</div></Link>
			</div>
		</div>
	)
}

export default PostBox