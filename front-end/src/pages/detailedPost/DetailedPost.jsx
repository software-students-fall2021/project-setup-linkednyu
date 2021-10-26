import "./detailedPost.css"
import { Button } from "../../components/Button"
import Comment from "../../components/Comment"
import ImageAvatars from "../../components/Avatar"

export default function DetailedPost() {
    return (
        <div className="detailedPost">
            <div className="detailedWrapper">
                <div className="detailedPostTop">
                    <div className="detailedPostTopLeft">
                        <div className="detailedPostAvatar">
                            <ImageAvatars />
                        </div>
                    </div>
                    <div className="detailedPostTopMiddle">
                        <div className="detailedPostTopMiddleTop">
                            <div className="detailedPostClass">Software Engineering</div>
                        </div>
                        <div className="detailedPostTopMiddleBottom">
                            <div className="detailedPostUserName">Anastasia Ye</div>
                            <div className="detailedPosDate">5 mins ago</div>
                        </div>
                    </div>
                    <div className="detailedPostTopRight">
                        <Button onClick={() => console.log('clicked')}
                            type="Button"
                            buttonStyle="btn--primary--solid"
                            buttonSize="btn--large"
                        > Join  </Button>
                    </div>
                </div>
                <div className="detailedPostCenter">
                    <span className="detailedPostTitle">How to do HW3</span>
                    <span className="detailedPostText">Helllllppppppp</span>
                    <img className="detailedPostImg" src="https://picsum.photos/200" alt="" />
                </div>
                <div className="detailedPostBottom">
                    <span className="detailedPostCommentCounter">32 Comments</span>
                </div>
                <div className="detailedPostComment">
                    <Comment></Comment>
                    <Comment></Comment>
                    <Comment></Comment>
                </div>
                <div className="detailedPostFooter">
                    <input placeholder="Comment Something..." className="detailedPostAddComment" />
                    <Button onClick={() => console.log('clicked')}
                        type="Button"
                        buttonStyle="btn--primary--solid"
                        buttonSize="btn--small"
                    > Comment  </Button>
                </div>
            </div>
        </div>
    )
}
