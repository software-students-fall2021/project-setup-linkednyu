import "./home.css"
import PostBox from "../../components/PostBox"
import { useState, useEffect } from "react"
import axios from 'axios'

export default function Home({ loggedIn }) {
    const url = "http://localhost:4000/homeposts"
    const [posts, setPosts] = useState(null)
    const [loading, setIsloading] = useState(true)

    //fetch post from server
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
    }, [])

    return (
        <>
            {!loading && <div className="homePage">
                {[...posts].reverse().map((item) => (
                    <PostBox key={item._id} loggedIn={loggedIn} post={item} />
                ))}
            </div>}
        </>

    )
}

