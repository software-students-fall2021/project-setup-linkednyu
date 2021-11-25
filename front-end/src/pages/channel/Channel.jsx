import "./channel.css"
import PostBox from "../../components/PostBox"
import { useState,useEffect } from "react"
import axios from 'axios'
import { useParams } from "react-router"
import { useHistory } from "react-router"


export default function Channel ({loggedIn}) {
    const {id}= useParams();
    const url = `/channel/${id}`
    const [post,setPosts] = useState(null)
    const [loading , setIsloading] = useState(true)
    const History = useHistory()
    

    useEffect(()=>{

            async function fetchposts(){
                let token = localStorage.getItem('token')
                try{
                    await axios.get(url,{headers:{"coursename":id,'Token':token}}).then(response =>{
                            setPosts(response.data)
                            setIsloading(false)
                    });

                } catch(error){
                    
                    if (error.response.status===402){
                        History.push(`/joinclass/${id}`)
                    }
                    else{
                        History.push('/login')
                    }
                    
                }
            }
        fetchposts()
        // eslint-disable-next-line 
    },[])

       

    return (
        <>
            {!loading && <div className="channelPage">
                <h2 className="channelHeader">{id}</h2>
                {post.map((items,index) => (
                    <PostBox key = {index} loggedIn={loggedIn} post={items}  />
                ))}
            </div>}
        </>
        
    )
}

