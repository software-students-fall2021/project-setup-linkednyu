import "./channel.css"
import PostBox from "../../components/PostBox"
import { useState,useEffect } from "react"
import axios from 'axios'
import { useParams } from "react-router"


export default function Channel ({loggedIn}) {
    const {id}= useParams();
    const url = `/channel/${id}`
    const [post,setPosts] = useState(null)
    const [loading , setIsloading] = useState(true)
    

    useEffect(()=>{

            async function fetchposts(){
                try{
                    await axios.get(url,{headers:{"coursename":id}}).then(response =>{
                        setPosts(response.data)
                        setIsloading(false)
                    });

                } catch(error){
                    console.log(error);
                }
            }
        fetchposts()
        // eslint-disable-next-line 
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

