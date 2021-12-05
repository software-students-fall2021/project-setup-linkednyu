import "./detailedPost.css"
import { Button } from "../../components/Button"
import Comment from "../../components/Comment"
import ImageAvatars from "../../components/Avatar"
import { useState, useEffect } from "react"
import axios from 'axios'
import { useParams } from "react-router"
import parser from 'html-react-parser'
import { useHistory } from "react-router"
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';


export default function DetailedPost() {
    const { id } = useParams();
    const History = useHistory()
    let token = localStorage.getItem('token')

    //connect to backend
    const url = `http://localhost:5000/api/detailedposts/${id}`
    const commenturl = `http://localhost:5000/api/comments/${id}`
    const accounturl = `http://localhost:5000/api/userAccount`
    const [post, setPosts] = useState(null)
    const [comment, setComments] = useState(null)
    const [loading, setIsloading] = useState(true)
    const [liked, setIsLiked] = useState(false)
    const [loadingComment, setIsloadingComment] = useState(true)
    const [newComment, setContent] = useState({
        userName: '',
        avatar: "",
        content: '',
        date: new Date(),
        post_id: ''
    })

    const [account, setAccount] = useState(undefined)
    const [loadingAccount, setIsloadingAccount] = useState(true)

    const onLike = async () => {
        await axios.post(`http://localhost:5000/api/like/${id}`, { headers: { 'Token': token }, isLiked: liked }, { headers: { 'Token': token } }).then(response => {
            console.log("sent");
        })
            .catch((err) => console.log(err.message));

        if (liked) {
            setIsLiked(false)
        } else {
            setIsLiked(true)
        }

        async function fetchposts() {
            let token = localStorage.getItem('token')
            try {
                await axios.get(url, { headers: { 'Token': token } }).then(response => {
                    setPosts(response.data)
                    setIsloading(false)

                });
            } catch (error) {
                History.push('/login')
            }

        }
        fetchposts()
    }


    const onComment = async (e) => {
        e.preventDefault()


        if (!newComment.content) {
            alert('please add a comment')
            return
        }

        await axios.post(`http://localhost:5000/api/comments/${id}`, newComment, { headers: { 'Token': token } }).then(response => {
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
        let isMounted2 = true;
        async function fetchaccount() {
            let token = localStorage.getItem('token')

            try {
                await axios.get(accounturl, { headers: { 'Token': token } }).then(response => {
                    if (isMounted2) {
                        setAccount(response.data)
                        setIsloadingAccount(false)
                    }

                });
            } catch (error) {
                History.push('/login')
            }

        }
        fetchaccount()
        return () => { isMounted2 = false };
        // eslint-disable-next-line 
    }, [])


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


    useEffect(() => {
        async function setLike() {
            if (!loading && !loadingAccount) {
                setIsLiked(false)
                for (let i = 0; i < post.like.length; i++) {
                    if (post.like[i] === account._id) {
                        setIsLiked(true)
                        break
                    }
                }
                // console.log(liked)
            }
        }
        setLike()
    }, [loading, loadingAccount, account, post])


    return (
        <>
            {(loading || loadingComment || loadingAccount) && < div className="landing" >
                <h1>Linked NYU</h1></div>}
            {!loading && !loadingComment && !loadingAccount && <div className="detailedPost" >
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
                        <span className="likeCount">{post.like.length} likes </span>
                        <Button className="detailedPostLikeBtn"
                            buttonSize="btn--medium" buttonStyle="btn--dark--solid"
                            onClick={onLike}>
                            <span className="likeIcon">{!liked && <FavoriteBorderIcon fontSize="small" />}{liked && <FavoriteIcon fontSize="small" />}</span>
                        </Button>
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
                            onChange={(e) => setContent({ ...newComment, userName: account.username, avatar: account.profile, post_id: post._id, content: e.target.value })}
                        />
                        <div className="commentButtonSection">
                            <Button className="commentButton"
                                buttonSize="btn--medium" buttonStyle="btn--dark--solid"
                            > Comment </Button>
                        </div>
                    </form>
                </div>
            </div >
            }
        </>
    )
}


