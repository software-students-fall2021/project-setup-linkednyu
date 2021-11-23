import "./comment.css"
import ImageAvatars from "../components/Avatar"

export default function Comment({ comment }) {
    return (
        <div className="comment">
            <div className="commentTop">
                <div className="commentAvatar">
                    <ImageAvatars id={comment.userName} avatarSrc={comment.avatar} />
                </div>
                <div className="commentUserName">{comment.userName}</div>
                <div className="commentDate">{new Date(comment.date).toISOString().slice(0, 10)}</div>
            </div>
            <div className="commentBottom">
                <span className="commentText">{comment.content}</span>
            </div>
        </div>
    )
}
