import "./detailedPost.css"
import { Button } from "../../components/Button"
import Comment from "../../components/Comment"
import ImageAvatars from "../../components/Avatar"
import { useState, useEffect } from "react"
import axios from 'axios'
import { useParams } from "react-router"


export default function DetailedPost() {
    const { id } = useParams();

    //console.log(id);
    //connect to backend
    const url = `/detailedposts/${id}`
    const commenturl = `/comments/${id}`
    const [post, setPosts] = useState(null)
    const [comment, setComments] = useState(null)
    const [loading, setIsloading] = useState(true)
    const [loadingComment, setIsloadingComment] = useState(true)
    const [newComment, setContent] = useState({
        userName: 'Anastasia Ye',
        avatar: "https://robohash.org/etiustodolorum.png?size=50x50&set=set1",
        content: '',
        date: new Date(),
        post_id: ''
    })

    const onComment = (e) => {
        e.preventDefault()

        if (!newComment) {
            alert('please add a comment')
            return
        }

        axios.post(`http://localhost:5000/comments/${id}`, newComment).then(response => {
            console.log(response);
        })
            .catch((err) => console.log(err.message));


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
        setContent({
            userName: 'Anastasia Ye',
            avatar: 'https://robohash.org/etiustodolorum.png?size=50x50&set=set1',
            content: '',
            date: new Date(),
            post_id: ''
        })

    }

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
    }, [url])

    useEffect(() => {
        async function fetchComments() {
            try {
                await axios.get(commenturl).then(response => {
                    //console.log(response.data)
                    setComments(response.data)
                    setIsloadingComment(false)
                });
            } catch (error) {
                console.log(error)
            }

        }
        fetchComments()
    }, [commenturl])


    return (
        <> {!loading && !loadingComment && <div className="detailedPost" >
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
                            <div className="detailedPosDate">{new Date(post.date).toISOString().slice(0, 10)}</div>
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
                    {comment.map((p, index) => (
                        <Comment key={index} comment={p} />
                    ))}
                </div>
                <form className="detailedPostFooter" onSubmit={onComment}>
                    <input
                        type="text"
                        placeholder="Comment Something..."
                        className="detailedPostAddComment"
                        value={newComment.content}
                        onChange={(e) => setContent({ ...newComment, post_id: post._id, content: e.target.value })}
                    />
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


