import "./detailedPost.css"
import { Button } from "../../components/Button"
// import Comment from "../../components/Comment"
import ImageAvatars from "../../components/Avatar"
import { useState, useEffect } from "react"
import axios from 'axios'
import { useParams } from "react-router"


export default function DetailedPost() {
    const { id } = useParams();

    console.log(id);
    //connect to backend
    const url =  `/detailedposts/${id}`
    const [post, setPosts] = useState(null)

    const [loading, setIsloading] = useState(true)
 
    useEffect(() => {
        async function fetchposts() {
            try {
                await axios.get(url).then(response => {
                    setPosts(response.data)
                    setIsloading(false)
                   
                });
            } catch (error) {
                console.log(error)
            }

        }
        fetchposts()
    },[url])

    

    

    return (
        <> {!loading && <div className="detailedPost" >
            <div className="detailedWrapper">
                <div className="detailedPostTop">
                    <div className="detailedPostTopLeft">
                        <div className="detailedPostAvatar">
                            <ImageAvatars id={post.username} avatarSrc={post.avatar} />
                        </div>
                    </div>
                    <div className="detailedPostTopMiddle">
                        <div className="detailedPostTopMiddleTop">
                            <div className="detailedPostClass">{post.coursename}</div>
                        </div>
                        <div className="detailedPostTopMiddleBottom">
                            <div className="detailedPostUserName">{post.username}</div>
                            <div className="detailedPosDate">{new Date(post.date).toISOString().slice(0,10)}</div>
                        </div>
                    </div>
                    <div className="detailedPostTopRight">
                        <Button className="commentButton" onClick={() => alert('successfully joined!')}
                            buttonSize="btn--medium" buttonStyle="btn--primary--solid"
                        > Join  </Button>
                    </div>
                </div>
                <div className="detailedPostCenter">
                    <span className="detailedPostTitle">{post.title}</span>
                    <span className="detailedPostText">{post.content}</span>
                    <img className="detailedPostImg" src={post.imgSrc} alt="" />
                </div>
                <div className="detailedPostBottom">
                    <span className="detailedPostCommentCounter">{} comments</span>
                </div>
                <div className="detailedPostComment">
                    {/* {comment.map((p, index) => (
                        <Comment key={index} comment={p} />
                    ))} */}
                </div>
                <form className="detailedPostFooter">
                    <input placeholder="Comment Something..." className="detailedPostAddComment" />
                    <div className="commentButtonSection">
                        <Button className="commentButton"
                            buttonSize="btn--medium" buttonStyle="btn--dark--solid"
                        > Comment</Button>
                    </div>
                </form>
            </div>
        </div >}
        </>
    )
}
