import "./home.css"
import PostBox from "../../components/PostBox"
import { useState, useEffect } from "react"
import axios from 'axios'


export default function Home({ loggedIn }) {
    const url = "/homeposts"
    const [posts, setPosts] = useState(null)
    const [loading, setIsloading] = useState(true)
    
    //fetch post from server
    useEffect(() => {
        let isMounted = true;
        async function fetchposts() {
            try {
                await axios.get(url).then(response => {
                    if(isMounted){
                        setPosts(response.data)
                        setIsloading(false)
                    }
                });
            } catch (error) {
                console.log(error);
            }
        }
        fetchposts()

        return () => {isMounted=false};
    }, [url])

    return (
        <>
            {!loading && <div className="homePage">
                {posts.map((items,index) => (
                    <PostBox key={index} loggedIn={loggedIn} post={items} />
                ))}
            </div>}
        </>

    )
}

