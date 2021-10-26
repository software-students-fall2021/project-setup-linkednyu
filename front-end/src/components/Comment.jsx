import "./comment.css"
import ImageAvatars from "../components/Avatar"

export default function Comment() {
    return (
        <div className="comment">
            <div className="commentTop">
                <div className="commentAvatar">
                    <ImageAvatars />
                </div>
                <div className="commentUserName">Willis Ma</div>
                <div className="commentDate">2 mins ago</div>
            </div>
            <div className="commentBottom">
                <span className="commentText">I don't know either</span>
            </div>
        </div>
    )
}
