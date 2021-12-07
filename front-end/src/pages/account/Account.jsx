import "./account.css"
import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from 'axios'
import { useHistory } from "react-router"
import parser from 'html-react-parser'
import { Button } from "../../components/Button"


export default function Account() {
    const url = "/api/userAccount"
    const posturl = "/api/homeposts"
    const History = useHistory()
    var postArray = []

    const [account, setAccount] = useState(undefined)
    const [loading, setIsloading] = useState(true)
    const [posts, setPosts] = useState(undefined)


    const onDelete = async (e) => {
        let token = localStorage.getItem('token')
        //console.log(e)

        await axios.post(`/api/deletePost`, { _id: e }, { headers: { 'Token': token } }).then(response => {
            console.log("sent");
        })
            .catch((err) => console.log(err.message));


        async function fetchposts() {
            try {
                await axios.get(posturl).then(response => {
                    for (let i = 0; i < response.data.length; i++) {
                        let newArray = []
                        if (account.username === response.data[i].username) {
                            newArray = response.data[i].content.split(" ")
                            let newSentence = ""
                            if (newArray.length > 10) {
                                newSentence = parser(newArray.slice(0, 12).join(" ") + "...")
                            }
                            else {
                                newSentence = parser(response.data[i].content)
                            }
                            postArray.push({ content: newSentence, link: response.data[i]._id })
                            if (postArray.length === 3) {
                                break
                            }
                        }
                    }
                    setPosts(postArray)

                });
            } catch (error) {
                console.log(error);
            }
        }
        fetchposts()

    }

    useEffect(() => {
        let isMounted = true;
        async function fetchaccount() {
            let token = localStorage.getItem('token')
            //console.log(token)

            try {
                await axios.get(url, { headers: { 'Token': token } }).then(response => {
                    if (isMounted) {
                        setAccount(response.data)
                    }

                });
            } catch (error) {
                History.push('/login')
            }

        }
        fetchaccount()
        return () => { isMounted = false };
        // eslint-disable-next-line 
    }, [])

    useEffect(() => {
        if (account !== undefined && posts !== undefined) setIsloading(false);
        // eslint-disable-next-line 
    }, [posts])

    useEffect(() => {
        let isMounted1 = true;
        async function fetchposts() {
            try {
                await axios.get(posturl).then(response => {
                    if (isMounted1) {
                        for (let i = 0; i < response.data.length; i++) {
                            let newArray = []
                            if (account.username === response.data[i].username) {
                                newArray = response.data[i].content.split(" ")
                                let newSentence = ""
                                if (newArray.length > 10) {
                                    newSentence = parser(newArray.slice(0, 12).join(" ") + "...")
                                }
                                else {
                                    newSentence = parser(response.data[i].content)
                                }
                                postArray.push({ content: newSentence, link: response.data[i]._id })
                                if (postArray.length === 3) {
                                    break
                                }
                            }
                        }
                        setPosts(postArray)
                    }
                });
            } catch (error) {
                console.log(error);
            }
        }
        fetchposts()
        return () => { isMounted1 = false };
        // eslint-disable-next-line 
    }, [account])




    return (
        <>
            {loading && < div className="landing" >
                <h1>LinkedNYU</h1></div>}
            {!loading && <div className="accountPage">
                <div className="accountHeader">
                    <h1 className="accountName">{account.name}</h1>
                </div>
                <div className="accountTop">
                    <div className="accountImage">
                        <img className="profilePicture" alt="" src={account.profile}></img>
                    </div>
                    <div className="accountBio">
                        <h2>{account.info}</h2>
                        <span>{account.message}</span>
                    </div>
                </div>
                <div className="accountBottom">
                    <div className="accountEdit">
                        <Link to={`/editaccount`} >
                            <Button buttonStyle="btn--dark--solid"
                                buttonSize="btn--large--fixed">
                                Update Info
                            </Button>
                        </Link>
                    </div>
                    <div className="userClasses">
                        <div className="contentTitle">
                            <h2>My Channels</h2>
                        </div>
                        <div className="contentList">
                            {account.channel.map((item, index) => {
                                return <Link className="classStyle" key={index} to={`/channel/${item}`}>{item}</Link>

                            })}
                        </div>
                    </div>
                    <div className="userClasses">
                        <div className="contentTitle">
                            <h2>Recent Posts</h2>
                        </div>
                        <div className="contentList">
                            {posts.map((item, index) => {
                                return (<><div className="postItem">
                                    <Link className="classStyle1" key={index} to={`/detailedposts/${item.link}`}>{index + 1}.{item.content}</Link>
                                    <Button className="postDelete"
                                        onClick={() => onDelete(item.link)}
                                        buttonSize="btn--medium" buttonStyle="btn--primary--outline">
                                        <span className="likeIcon">Delete</span>
                                    </Button>
                                </div></>)
                            })}
                        </div>
                    </div>

                </div>

            </div>}
        </>
    )
}