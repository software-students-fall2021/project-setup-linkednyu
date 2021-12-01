import "./account.css"
import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from 'axios'
import { useHistory } from "react-router"
import parser from 'html-react-parser'


export default function Account() {
    const url = "/userAccount"
    const posturl = "http://localhost:5000/homeposts"
    const History = useHistory()
    var postArray = []

    const [account, setAccount] = useState(undefined)
    const [loading, setIsloading] = useState(true)
    const [posts, setPosts] = useState(undefined)

    useEffect(() => {
        let isMounted = true;
        async function fetchaccount() {
            let token = localStorage.getItem('token')

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
                    <h1 className="accountName">{account.username}</h1>
                </div>
                <div className="accountTop">
                    <div className="accountImage">
                        <img className="profilePicture" alt="" src="https://robohash.org/etiustodolorum.png?size=50x50&set=set1"></img>
                    </div>
                    <div className="accountBio">
                        <h2>Welcome Back!</h2>
                        <span>{account.message}</span>
                    </div>
                </div>
                <div className="accountBottom">
                    <div className="userClasses">
                        <div className="contentTitle">
                            <h2>My Classes</h2>
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
                                return <Link className="classStyle1" key={index} to={`/detailedposts/${item.link}`}>{index + 1}.{item.content}</Link>

                            })}
                        </div>
                    </div>

                </div>

            </div>}
        </>
    )
}