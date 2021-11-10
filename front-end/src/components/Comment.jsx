import "./comment.css"
import ImageAvatars from "../components/Avatar"

export default function Comment({ comment }) {
    return (
        <div className="comment">
            <div className="commentTop">
                <div className="commentAvatar">
                    <ImageAvatars id={comment.comment_id} avatarSrc={comment.avatar} />
                </div>
                <div className="commentUserName">{comment.userName}</div>
                <div className="commentDate">{comment.date}</div>
            </div>
            <div className="commentBottom">
                <span className="commentText">{comment.comment}</span>
            </div>
        </div>
    )
}
