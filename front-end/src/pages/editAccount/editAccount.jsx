import "./editAccount.css"
import { Button } from "../../components/Button"
import Comment from "../../components/Comment"
import ImageAvatars from "../../components/Avatar"
import { useState, useEffect } from "react"
import axios from 'axios'
import { useParams } from "react-router"
import parser from 'html-react-parser'
import { useHistory } from "react-router"


export default function EditAccount() {
    const { id } = useParams();
    const History = useHistory()
    let token = localStorage.getItem('token')

    //connect to backend
    const url = `/editaccount/${id}`
    const [account, setPosts] = useState(null)
    const [loading, setIsloading] = useState(true)
    const [newInfo, setContent] = useState({
        userName: '',
        avatar: "",
        content: '',
        date: new Date(),
        post_id: ''
    })



    const onComment = async (e) => {
        e.preventDefault()


        if (!newComment.content) {
            alert('please add a comment')
            return
        }

        await axios.post(`http://localhost:5000/comments/${id}`, newComment, { headers: { 'Token': token } }).then(response => {
            console.log("sent");
        })
            .catch((err) => console.log(err.message));


        async function fetchComments() {

            try {
                await axios.get(commenturl, { headers: { 'Token': token } }).then(response => {
                    setComments(response.data)
                    setIsloadingComment(false)
                });
            } catch (error) {
                console.log(error)
            }

        }
        fetchComments()
        setContent({
            userName: '',
            avatar: '',
            content: '',
            date: new Date(),
            post_id: ''
        })


    }


    useEffect(() => {
        let isMounted = true;
        async function fetchposts() {
            let token = localStorage.getItem('token')
            try {
                await axios.get(url, { headers: { 'Token': token } }).then(response => {
                    if (isMounted) {
                        setPosts(response.data)
                        setIsloading(false)
                    }
                });
            } catch (error) {
                History.push('/login')
            }

        }
        fetchposts()

        return () => { isMounted = false };
        // eslint-disable-next-line 
    }, [])


    useEffect(() => {
        let isMounted1 = true;
        async function fetchComments() {
            let token = localStorage.getItem('token')
            try {
                await axios.get(commenturl, { headers: { 'Token': token } }).then(response => {
                    if (isMounted1) {
                        setComments(response.data)
                        setIsloadingComment(false)
                    }

                });
            } catch (error) {
                console.log(error)
            }

        }
        fetchComments()

        return () => { isMounted1 = false };
    }, [commenturl])


    return (
        <>
            {loading && < div className="landing" >
                <h1>Linked NYU</h1></div>}
            {!loading && <div className="editAccount" >
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
                    </div>
                    <div className="detailedPostCenter">
                        <span className="detailedPostTitle">{post.title}</span>
                        <span className="detailedPostText">{parser(post.content + '')}</span>
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
                            onChange={(e) => setContent({ ...newComment, userName: post.username, avatar: post.avatar, post_id: post._id, content: e.target.value })}
                        />
                        <div className="commentButtonSection">
                            <Button className="commentButton"
                                buttonSize="btn--medium" buttonStyle="btn--dark--solid"
                            > Comment</Button>
                        </div>
                    </form>
                </div>
            </div >
            }
        </>
    )
}


