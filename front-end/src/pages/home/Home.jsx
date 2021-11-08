import "./home.css"
import PostBox from "../../components/PostBox"
import { useState, useEffect } from "react"
import axios from 'axios'

export default function Home({ loggedIn }) {
    const url = "http://localhost:5000/homeposts"
    const [posts, setPosts] = useState(null)
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
    }, [])

    return (
        <>
            {!loading && <div className="homePage">
                {posts.map((posts) => (
                    <PostBox key={posts.id} loggedIn={loggedIn} post={posts} />
                ))}
            </div>}
        </>

    )
}


