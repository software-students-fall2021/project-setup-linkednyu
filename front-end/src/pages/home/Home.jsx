import "./home.css"
import PostBox from "../../components/PostBox"
import { useState, useEffect } from "react"
import axios from 'axios'


export default function Home({ loggedIn }) {
    const url = "/homeposts"
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
    }, [])


    return (
        <>
            {!loading && <div className="homePage">
                {post.map((items) => (
                    <PostBox key={items.id} loggedIn={loggedIn} post={items} />
                ))}
            </div>}
        </>

    )
}

