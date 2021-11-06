import "./channel.css"
import PostBox from "../../components/PostBox"
import { useState,useEffect } from "react"
import axios from 'axios'
import { useParams } from "react-router"


export default function Channel ({loggedIn}) {
    const url = "/channel/Mathematics"
    const [post,setPosts] = useState(null)
    const [loading , setIsloading] = useState(true)
    const {id}= useParams();

    useEffect(()=>{

            async function fetchposts(){
                try{
                    await axios.get(url).then(response =>{
                        setPosts(response.data)
                        setIsloading(false)
                    });

                } catch(error){
                    console.log(error);
                }
            }
        fetchposts()
    },[])

       

    return (
        <>
            {!loading && <div className="channelPage">
                <h2 className="channelHeader">{id}</h2>
                {post.map((items) => (
                    <PostBox key = {items.id} loggedIn={loggedIn} post={items}  />
                ))}
            </div>}
        </>
        
    )
}

