import "./detailedPost.css"
import { Button } from "../../components/Button"
import Comment from "../../components/Comment"
import ImageAvatars from "../../components/Avatar"
import { useState, useEffect } from "react"
import axios from 'axios'
import { useParams } from "react-router"


export default function DetailedPost() {
    const { id } = useParams()
    
    //connect to backend
    const url = "/detailedposts/:id"      //"https://61798eeaaa7f340017404b69.mockapi.io/post"
    const commenturl = "/comments"             //"https://61798eeaaa7f340017404b69.mockapi.io/comment"        
    const [post, setPosts] = useState(null)
    const [comment, setComments] = useState(null)
    const [loading, setIsloading] = useState(true)
    const [loadingComment, setIsloadingComment] = useState(true)

    const [content, setContent] = useState('')
    var count = 12

    const articles = {
        "date": "May",
        "first_name": "Adonis",
        "last_name": "Pollich",
        "comment": content,
        "id": count,
    };

    const onComment = (e) => {
        e.preventDefault()

        if (!content) {
            alert('please add a comment')
            return
        }

        axios.post('http://localhost:5000/comments',articles).then(response=>{
            console.log(response);
        });


        async function fetchComments() {
            try {
                await axios.get(commenturl).then(response => {
                    setComments(response.data)
                    setIsloadingComment(false)
                });
            } catch (error) {
                console.log(error)
            }

        }
        fetchComments()
        setContent("")
        count = count + 1

    }

    useEffect(() => {
        async function fetchposts() {
            try {
                await axios.get(url).then(response => {
                    //get the id of the post
                    setPosts(response.data[id - 1])
                    setIsloading(false)
                });
            } catch (error) {
                console.log(error)
            }

        }
        fetchposts()
    }, [id])

    useEffect(() => {
        async function fetchComments() {
            try {
                await axios.get(commenturl).then(response => {
                    setComments(response.data)
                    setIsloadingComment(false)
                });
            } catch (error) {
                console.log(error)
            }

        }
        fetchComments()
    }, [])

    return (
        <> {!loading && !loadingComment && <div className="detailedPost" >
            <div className="detailedWrapper">
                <div className="detailedPostTop">
                    <div className="detailedPostTopLeft">
                        <div className="detailedPostAvatar">
                            <ImageAvatars avatarSrc={post.avatar} />
                        </div>
                    </div>
                    <div className="detailedPostTopMiddle">
                        <div className="detailedPostTopMiddleTop">
                            <div className="detailedPostClass">{post.courseName}</div>
                        </div>
                        <div className="detailedPostTopMiddleBottom">
                            <div className="detailedPostUserName">{post.userName}</div>
                            <div className="detailedPosDate">{post.date}</div>
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
                    <span className="detailedPostCommentCounter">{comment.length} comments</span>
                </div>
                <div className="detailedPostComment">
                    {comment.map((p,index) => (
                        <Comment key={index} comment={p} />
                    ))}
                </div>
                <form className="detailedPostFooter" onSubmit={onComment}>
                    <input placeholder="Comment Something..." className="detailedPostAddComment" value={content} onChange={(e) => setContent(e.target.value)} />
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
