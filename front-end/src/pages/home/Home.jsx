import "./home.css"
import PostBox from "../../components/PostBox"
import { useState,useEffect } from "react"
import axios from 'axios'


export default function Home({loggedIn}) {
    const url = "https://my.api.mockaroo.com/posts.json?key=2ae40da0"
    const picurl = "https://picsum.photos/v2/list"
    const [post,setPosts] = useState(null)
    const [pictures,setPictures] = useState(null)
    const [loading , setIsloading] = useState(true)
    const [loading1 , setIsloading1] = useState(true)

    useEffect(()=>{
        async function fetchposts(){
            try {
                await axios.get(url).then(response =>{
                    setPosts(response.data)
                    setIsloading(false)
                });
            } catch (error) {
                console.log(error)
            }
        }
        fetchposts()
    },[])


    useEffect(()=>{
        async function fetchpictures(){
            try {
                await axios.get(picurl).then(response =>{
                    setPictures(response.data)
                    setIsloading1(false)
                });
            } catch (error) {
                console.log(error)
            }
        }
        fetchpictures()
    },[])


    if (!loading && !loading1){
        for (let i =0 ; i<post.length ;i++){
            post[i]["imgSrc"]=pictures[Math.floor(Math.random()*29)].download_url
        }

    }
       

    return (
        <>
            {!loading && !loading1 && <div className="homePage">
                {post.map((items) => (
                    <PostBox key = {items.id} loggedIn={loggedIn} post={items}  />
                ))}
            </div>}
        </>
        
    )
}

